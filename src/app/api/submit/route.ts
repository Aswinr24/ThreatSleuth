import { db } from '@/lib/connection'
import UrlModel from '@/models/urlSubmit';
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { url, type } = await request.json()
        await db()
        await UrlModel.create({ url, type})
        await mongoose.connection.close()
        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}