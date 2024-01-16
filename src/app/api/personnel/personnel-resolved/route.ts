import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const email = request.headers.get('x-personnel-email')!

    const complaints = await prisma.personnel.findFirst({
      where: {
        email,
      },
      select: {
        complaints: {
          where: {
            fixed: true,
          },
          select: {
            category: true,
            issue: true,
            createdAt: true,
            hall: true,
            student: {
              select: {
                matricNo: true,
                firstname: true,
                lastname: true,
              },
            },
          },
        },
      },
    })

    return Response.json(complaints?.complaints)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
