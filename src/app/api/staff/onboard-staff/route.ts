import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { hall, firstname, lastname, email, staffNo } = await request.json()

    await prisma.hallOfficer.create({
      data: {
        email,
        firstname,
        hall,
        lastname,
        staffNo,
      },
    })

    return Response.json('staff onboarded')
  } catch (e) {
    console.error(e)
    return new Response(null, {
      status: 500,
      statusText: 'Onboarding Failed',
    })
  }
}
