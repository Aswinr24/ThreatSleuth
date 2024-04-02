import { Schema, model, models } from "mongoose";
const contactSchema = new Schema({
    email: String,
    subject: String,
    message: String,
},
    {
        timestamps: true
    }
)
const ContactModel = models.contact || model("contact", contactSchema)
export default ContactModel