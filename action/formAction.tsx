"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface FormState {
  errors: {
    email: boolean
    name: boolean
    message: boolean
    subject: boolean
  }
  success: boolean
  message: string
}

export const formSubmission = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const email = formData.get("email") as string
  const name = formData.get("name") as string
  const message = formData.get("message") as string
  const subject = formData.get("subject") as string

  if (!email || !name || !message || !subject) {
    return {
      errors: {
        email: !email,
        name: !name,
        message: !message,
        subject: !subject,
      },
      success: false,
      message: "Please fill out all fields.",
    }
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", 
      to: "email-pribadi-anda@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      replyTo: email, // <-- PERBAIKAN DI SINI: dari reply_to menjadi replyTo
      html: `<p>You have received a new message from your website's contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    })

    return {
      errors: { email: false, name: false, message: false, subject: false },
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      ...prevState,
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}