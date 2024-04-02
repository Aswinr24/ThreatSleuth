import { Schema, model, models } from "mongoose";
const urlSchema = new Schema({
    url: String,
    type: String,
},
    {
        timestamps: true
    }
)
const UrlModel = models.url || model("url", urlSchema)
export default UrlModel