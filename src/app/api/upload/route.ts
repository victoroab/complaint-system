import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

export async function PUT(request: NextRequest) {
  const { id, publicUrl } = await request.json()
  const searchParams = request.nextUrl.searchParams
  const usertype = searchParams.get('usertype')!.toUpperCase()

  try {
    switch (usertype) {
      case 'STUDENT':
        await prisma.studentProfile.upsert({
          where: { studentId: id },
          update: { url: publicUrl },
          create: { studentId: id, url: publicUrl },
        })

        return Response.json('updated')

      case 'STAFF':
        await prisma.hallOfficerProfile.upsert({
          where: { hallOfficerId: id },
          update: { url: publicUrl },
          create: { hallOfficerId: id, url: publicUrl },
        })

        return Response.json('updated')

      case 'PERSONNEL':
        await prisma.personnelProfile.upsert({
          where: { personnelId: id },
          update: { url: publicUrl },
          create: { personnelId: id, url: publicUrl },
        })

        return Response.json('updated')

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
