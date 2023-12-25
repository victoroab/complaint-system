import { NextRequest } from 'next/server'
import prisma from '@/lib/db'

const CATEGORIES = [
  'ELECTRICAL',
  'FURNITURE',
  'PLUMBING',
] as const

type Category = (typeof CATEGORIES)[number]

export async function GET(request: NextRequest) {
  try {
    const category = request.headers.get('x-personnel-category')! as Category

    const complaints = await prisma.complaints.findMany({
      where: {
        category
      }, 
      orderBy: {createdAt: "desc"},
      select: {
        id: true,
        hall: true,
        issue: true,
        createdAt: true,
        student: {
          select: {
            matricNo: true,
            firstname: true,
            lastname: true,
            roomNumber: true
          }
        }
      },
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
