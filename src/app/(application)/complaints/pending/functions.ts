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

const getStaffPending = async (hall: string) => {
  try {
    const pending = await Axios.get('/staff/staff-complaints', {
      withCredentials: true,
      headers: { 'x-staff-hall': hall },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const getPersonnelCategory = async (email: string) => {
  try {
    const category = await Axios.get(
      `/personnel/get-personnel-category?email=${email}`,
      {
        withCredentials: true,
      }
    )
    return category.data
  } catch (e) {
    console.error(e)
  }
}

const getPersonnelPending = async (category: string) => {
  try {
    const pending = await Axios.get('/personnel/personnel-complaints', {
      withCredentials: true,
      headers: { 'x-personnel-category': category },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const handleComplaint = async ({
  id,
  email,
}: {
  id: string
  email: string
}) => {
  try {
    await Axios.put(
      '/personnel/handle-complaint',
      {
        id,
        email,
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
  getPersonnelCategory,
  getPersonnelPending,
  handleComplaint,
  inspectComplaint,
}
