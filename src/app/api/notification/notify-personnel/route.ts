import { NextRequest } from 'next/server'
import { EmailNotification } from '@/lib/mail-service'

export async function POST(request: NextRequest) {
  try {
    const { email, hall } = await request.json()
    new EmailNotification({
      to: email,
      subject: 'Unhandled Coplaints',
      body: `Your services are needed at ${hall} hall!`,
    }).send()
    return Response.json('notification sent')
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
