from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
from tld import get_tld
from urllib.parse import urlparse
import re
from pydantic import BaseModel
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
import string
nltk.download('stopwords')
nltk.download('punkt')
stemmer = PorterStemmer()

app = FastAPI()

class URLInput(BaseModel):
    url: str
class emailInput(BaseModel):
    email: str
class msgInput(BaseModel):
    msg: str        
    

origins = [
"*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def transform(text):
    text = text.lower()
    text = nltk.word_tokenize(text)
    current = []
    for i in text:
        if i.isalnum():
            current.append(i)
    text = current[:]
    current.clear()
    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            current.append(i)
    for i in text:
        current.append(stemmer.stem(i))
    return " ".join(current)

def process_input(text):
    df={'url':[text]}
    data=pd.DataFrame(df,columns=['url','url_len','https','http','tld','tld_len','hostname_len','@','?','-','=','.','#','%','+','$','!','*',',','//','digits','letters','short_url','ip_address'])
    data['url'] = data['url'].replace('www.', '', regex=True)
    data['url_len'] = data['url'].apply(lambda x: len(str(x)))
    data['https'] = data['url'].apply(lambda i : i.count('https'))
    data['url'] = data['url'].replace('https', '', regex=True)
    data['http'] = data['url'].apply(lambda i : i.count('http'))
    data['tld'] = data['url'].apply(lambda i: get_tld(i,fail_silently=True))
    def tld_length(tld):
        try:
            return len(tld)
        except:
            return 0
    data['tld_len'] = data['tld'].apply(lambda i: tld_length(i))
    data['hostname_len'] = data['url'].apply(lambda i: len(urlparse(i).netloc))
    feature = ['@','?','-','=','.','#','%','+','$','!','*',',','//']
    data = data.drop(["tld"],axis=1)
    for a in feature:
        data[a] = data['url'].apply(lambda i: i.count(a))
    def digit_count(url):
        digits = 0
        for i in url:
            if i.isnumeric():
                digits = digits + 1
        return digits
    data['digits']= data['url'].apply(lambda i: digit_count(i))

    def letter_count(url):
        letters = 0
        for i in url:
            if i.isalpha():
                letters = letters + 1
        return letters
    data['letters']= data['url'].apply(lambda i: letter_count(i))

    def short_url(url):
        match = re.search(r'bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                        r'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                        r'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                        r'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                        r'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                        r'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                        r'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                        r'tr\.im|link\.zip\.net',
                        url)
        if match:
            return 1
        else:
            return 0
    data['short_url'] = data['url'].apply(lambda x: short_url(x))
    def ip_address(url):
        match = re.search(
            r'(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
            r'([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  # IPv4
            r'(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
            r'([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  # IPv4 with port
            r'((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)' # IPv4 in hexadecimal
            r'(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|'
            r'([0-9]+(?:\.[0-9]+){3}:[0-9]+)|'
            r'((?:(?:\d|[01]?\d\d|2[0-4]\d|25[0-5])\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d|\d)(?:\/\d{1,2})?)', url)  # Ipv6
        if match:
            return 1
        else:
            return 0
    data['ip_address'] = data['url'].apply(lambda i: ip_address(i))
    data=data.drop(['url'],axis=1)
    return data

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to ThreatSleuth"}

@app.post("/predict/url")
async def url_check(text: URLInput) -> dict:
    data=process_input(text.url)
    RF_spamURL_classifier = open('models\RF_malaciousURL_classifier.pkl','rb')
    model = joblib.load(RF_spamURL_classifier)
    pred=model.predict(data)
    pred=pred.tolist()
    return {
        "prediction": pred[0]
    }
    
@app.post("/predict/email")
async def email_check(text: emailInput) -> dict:
    data=[transform(text.email)]
    vectorizer=joblib.load('models\Vectorizer_mail.pkl')
    data = vectorizer.transform(data)
    SVC_spamMail_classifier= open('models\SVC_spamMail_classifier.pkl','rb')
    model = joblib.load(SVC_spamMail_classifier)
    pred=model.predict(data)
    pred=pred.tolist()
    return {
        "prediction": pred[0]
    }
    
@app.post("/predict/msg")
async def msg_check(text: msgInput) -> dict:
    data=[transform(text.msg)]
    vectorizer=joblib.load('models\Vectorizer_msg.pkl')
    data = vectorizer.transform(data)
    SGDC_spamMSG_classifier = open('models\SGDC_spamMSG_classifier.pkl','rb')
    model = joblib.load(SGDC_spamMSG_classifier)
    pred=model.predict(data)
    pred=pred.tolist()
    return {
        "prediction": pred[0]
    }
    