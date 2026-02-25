import { Resend } from "resend"

export const sendEmail = new Resend(process.env.RESEND_API_KEY)

if (!sendEmail) {
  throw new Error("Resend API key is not set in environment variables.")
}
