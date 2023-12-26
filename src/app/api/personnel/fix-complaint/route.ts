import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function PUT(request: NextRequest) {
  try {
    const { id } = await request.json()

    await prisma.complaints.update({
      where: {
        id,
      },
      data: {
        fixed: true,
      },
    })

    return Response.json('Fixed')
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
