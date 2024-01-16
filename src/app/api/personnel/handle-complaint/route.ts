import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function PUT(request: NextRequest) {
  try {
    const { id, email } = await request.json()

    await prisma.complaints.update({
      where: { id },
      data: { handler: { connect: { email } } },
    })

    return Response.json('Done')
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
