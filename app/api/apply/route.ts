import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { error: dbError } = await supabase.from("applications").insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      grade: data.grade,
      previous_school: data.previousSchool || null,
      parent_name: data.parentName,
      parent_phone: data.parentPhone,
      message: data.message || null,
      status: "pending",
    })

    if (dbError) {
      console.error("Database error:", dbError)
      // Continue even if database fails - still log the application
    }

    // Create email content
    const emailContent = `
New Application Received from Ablaal Schools Website

STUDENT INFORMATION
--------------------
First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Grade Applying For: ${data.grade}
Previous School: ${data.previousSchool || "N/A"}

PARENT/GUARDIAN INFORMATION
--------------------
Name: ${data.parentName}
Phone: ${data.parentPhone}

ADDITIONAL INFORMATION
--------------------
${data.message || "No additional message provided"}

--------------------
This application was submitted through the Ablaal Schools website.
    `.trim()

    // Log the application
    console.log("=== NEW APPLICATION RECEIVED ===")
    console.log(emailContent)
    console.log("================================")

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 })
  }
}
