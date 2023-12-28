import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const email = request.headers.get('x-user-email')!

    const pending = await prisma.student.findFirst({
      where: { email },
      select: {
        complaint: {
          where: {
            resolved: false,
          },
          select: {
            category: true,
            createdAt: true,
            issue: true,
            inspected: true,
            id: true,
            fixed: true,
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

    return Response.json(pending?.complaint)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
