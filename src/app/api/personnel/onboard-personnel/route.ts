import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, email, category } = await request.json()

    await prisma.personnel.create({
      data: {
        email,
        firstname,
        lastname,
        category,
      },
    })

    return Response.json('personnel onboarded')
  } catch (e) {
    console.error(e)
    return new Response(null, {
      status: 500,
      statusText: 'Onboarding Failed',
    })
  }
}
