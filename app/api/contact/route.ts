import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    // Save contact message to Supabase database
    const { error: dbError } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
    })

    if (dbError) {
      console.error("Database error:", dbError)
    }

    // Log the contact message
    console.log("=== NEW CONTACT MESSAGE ===")
    console.log(`From: ${data.name} (${data.email})`)
    console.log(`Subject: ${data.subject}`)
    console.log(`Message: ${data.message}`)
    console.log("===========================")

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact message:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
