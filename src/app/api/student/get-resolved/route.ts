import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const email = request.headers.get('x-user-email')!

    const resolved = await prisma.student.findFirst({
      where: { email },
      select: {
        complaint: {
          where: {
            resolved: true,
          },
          select: {
            id: true,
            category: true,
            createdAt: true,
            issue: true,
            handler: {
              select: {
                firstname: true,
                lastname: true,
              },
            },
          },
        },
      },
    })

    return Response.json(resolved?.complaint)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
