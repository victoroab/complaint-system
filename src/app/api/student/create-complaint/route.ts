import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { hall, category, issue, email } = await request.json()

    await prisma.student.update({
      data: {
        complaint: {
          create: {
            hall,
            issue,
            category,
          },
        },
      },
      where: { email },
    })

    return Response.json('created')
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
