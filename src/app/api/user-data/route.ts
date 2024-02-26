import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const usertype = searchParams.get('usertype')!.toUpperCase()
  const email = searchParams.get('email')!

  let data

  try {
    switch (usertype) {
      case 'STUDENT':
        data = await prisma.student.findFirst({
          where: { email },
          select: {
            id: true,
            firstname: true,
            lastname: true,
            hall: true,
            roomNumber: true,
            picture: { select: { url: true } },
          },
        })
        break

      case 'STAFF':
        data = await prisma.hallOfficer.findFirst({
          where: { email },
          select: {
            id: true,
            firstname: true,
            lastname: true,
            hall: true,
            picture: { select: { url: true } },
          },
        })
        break

      case 'PERSONNEL':
        data = await prisma.personnel.findFirst({
          where: { email },
          select: {
            id: true,
            firstname: true,
            lastname: true,
            category: true,
            picture: { select: { url: true } },
          },
        })
        break

      default:
        throw new Error('Invalid user type')
    }

    return Response.json(data)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
