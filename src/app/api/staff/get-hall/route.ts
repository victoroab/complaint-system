import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const email = searchParams.get('email')!

  try {
    const hall = await prisma.hallOfficer.findFirst({
      where: { email },
      select: { hall: true },
    })
    return Response.json(hall?.hall)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
