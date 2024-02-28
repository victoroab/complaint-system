import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const usertype = searchParams.get('usertype')!.toUpperCase()
  const email = searchParams.get('email')!

  let url

  try {
    switch (usertype) {
      case 'STUDENT':
        url = await prisma.student.findFirst({
          where: { email },
          select: {
            id: true,
            picture: { select: { url: true } },
          },
        })
        return Response.json(url)

      case 'STAFF':
        url = await prisma.hallOfficer.findFirst({
          where: { email },
          select: {
            id: true,
            picture: { select: { url: true } },
          },
        })
        return Response.json(url)

      case 'PERSONNEL':
        url = await prisma.personnel.findFirst({
          where: { email },
          select: {
            id: true,
            picture: { select: { url: true } },
          },
        })
        return Response.json(url)

      default:
        throw new Error('Invald user type')
    }
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
