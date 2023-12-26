import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function PUT(request: NextRequest) {
  try {
    const { id, personnelId } = await request.json()

    await prisma.complaints.update({
      where: { id },
      data: { personnelId },
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
