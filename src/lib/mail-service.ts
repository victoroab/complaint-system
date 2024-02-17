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

export class EmailNotification {
  protected __from = USER
  private to: string
  private subject: string
  private body: string

  constructor({
    to,
    subject,
    body,
  }: {
    to: string
    subject: string
    body: string
  }) {
    this.to = to
    this.subject = subject
    this.body = body
  }

  // setSubject(subject: string) {
  //   this.subject = subject
  // }

  // setBody(body: string) {
  //   this.body = body
  // }

  async send() {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: this.__from,
          to: this.to,
          subject: this.subject,
          text: this.body,
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
}

// export async function sendMail(
//   subject: string,
//   toEmail: string,
//   optText: string
// ) {
//   await new Promise((resolve, reject) => {
//     transporter.sendMail(
//       {
//         from: USER,
//         to: toEmail,
//         subject,
//         text: optText,
//       },
//       function (err: any, response) {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(response)
//         }
//       }
//     )
//   })
// }
