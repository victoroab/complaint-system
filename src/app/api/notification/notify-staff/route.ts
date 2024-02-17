import prisma from '@/lib/db'
import { NextRequest } from 'next/server'
import { EmailNotification } from '@/lib/mail-service'

export async function POST(request: NextRequest) {
  try {
    const { hall, roomNumber } = await request.json()

    const staff = await prisma.hallOfficer.findFirst({
      where: { hall },
      select: { email: true },
    })

    if (staff?.email) {
      new EmailNotification({
        to: staff.email,
        subject: 'Inspection',
        body: `Inspection needed at ${roomNumber}`,
      }).send()
    }

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
