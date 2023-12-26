import nodemailer from 'nodemailer'

const USER = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL as string
const PASS = process.env.NEXT_PUBLIC_NODEMAILER_PW as string

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USER,
    pass: PASS,
  },
})

export async function sendMail(
  subject: string,
  toEmail: string,
  optText: string
) {
  await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: USER,
        to: toEmail,
        subject,
        text: optText,
      },
      function (err: any, response) {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}
