import { db } from '@/lib/connection'
import ContactModel from '@/models/contact';
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, subject, message } = await request.json()
        await db()
        await ContactModel.create({ email, subject, message})
        await mongoose.connection.close()
        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}