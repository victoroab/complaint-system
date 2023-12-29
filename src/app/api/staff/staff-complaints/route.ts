import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

const HALLS = [
  'PETER',
  'PAUL',
  'JOHN',
  'JOSEPH',
  'DANIEL',
  'ESTHER',
  'LYDIA',
  'DEBORAH',
  'MARY',
  'DORCAS',
] as const

type Hall = (typeof HALLS)[number]

export async function GET(request: NextRequest) {
  try {
    const hall = request.headers.get('x-staff-hall')! as Hall

    const complaints = await prisma.complaints.findMany({
      where: {
        hall,
        resolved: false,
        inspected: false,
      },
      select: {
        id: true,
        category: true,
        createdAt: true,
        fixed: true,
        issue: true,
        student: {
          select: {
            firstname: true,
            lastname: true,
            matricNo: true,
            roomNumber: true,
          },
        },
        handler: {
          select: {
            email: true,
            firstname: true,
            lastname: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return Response.json(complaints)
  } catch (e) {
    console.error(e)

    let errorMessage = ''

    return new Response(null, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
