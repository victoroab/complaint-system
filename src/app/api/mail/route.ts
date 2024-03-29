import { NextRequest } from 'next/server'
import { EmailNotification } from '@/lib/mail-service'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    new EmailNotification({
      to: email,
      body: 'With a bit of design',
      subject: 'Hi',
    }).send()
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

// sendMail('Test', email, 'Without waiting for it to finish')
