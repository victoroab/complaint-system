import { Axios } from '@/lib/axios'

const getStudentPending = async (email: string) => {
  try {
    const pending = await Axios.get('/student/get-pending', {
      withCredentials: true,
      headers: { 'x-user-email': email },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const getStaffPending = async () => {
  try {
    const pending = await Axios.get('/staff/staff-complaints', {
      withCredentials: true,
      headers: { 'x-staff-hall': 'DANIEL' },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const getPersonnelPending = async () => {
  try {
    const pending = await Axios.get('/personnel/personnel-complaints', {
      withCredentials: true,
      headers: { 'x-personnel-category': 'ELECTRICAL' },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const handleComplaint = async ({
  id,
  personnelId,
}: {
  id: string
  personnelId: string
}) => {
  try {
    await Axios.put(
      '/personnel/handle-complaint',
      {
        id,
        personnelId,
      },
      {
        withCredentials: true,
      }
    )
  } catch (e) {
    console.error(e)
  }
}

const inspectComplaint = async ({ id }: { id: string }) => {
  try {
    await Axios.put(
      '/staff/inspect-complaint',
      {
        id,
      },
      {
        withCredentials: true,
      }
    )
  } catch (e) {
    console.error(e)
  }
}

export {
  getStudentPending,
  getStaffPending,
  getPersonnelPending,
  handleComplaint,
  inspectComplaint,
}
