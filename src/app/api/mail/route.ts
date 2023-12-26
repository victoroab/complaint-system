import { NextRequest } from 'next/server'
import { sendMail } from '../../../../mailer/mail-service'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    sendMail('Test', email, 'Without waiting for it to finish')
    return Response.json('sent')
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
