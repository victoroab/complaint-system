import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { hall, firstname, lastname, email, matricNo, roomNumber } =
      await request.json()

    await prisma.student.create({
      data: {
        email,
        firstname,
        hall,
        lastname,
        matricNo,
        roomNumber,
      },
    })

    return Response.json('student onboarded')
  } catch (e) {
    console.error(e)
    return new Response(null, {
      status: 500,
      statusText: 'Onboarding Failed',
    })
  }
}
