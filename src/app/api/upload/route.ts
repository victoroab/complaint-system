import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function PUT(request: NextRequest) {
  const { id, url } = await request.json()
  const searchParams = request.nextUrl.searchParams
  const usertype = searchParams.get('usertype')!.toUpperCase()

  try {
    switch (usertype) {
      case 'STUDENT':
        await prisma.student.update({
          where: { id },
          data: {
            picture: { create: { url } },
          },
        })
        break

      case 'STAFF':
        await prisma.hallOfficer.update({
          where: { id },
          data: {
            picture: { create: { url } },
          },
        })
        break

      case 'PERSONNEL':
        await prisma.hallOfficer.update({
          where: { id },
          data: {
            picture: { create: { url } },
          },
        })
        break

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
