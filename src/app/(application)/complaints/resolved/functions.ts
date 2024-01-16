import { Axios } from '@/lib/axios'

const getStudentResolved = async (email: string) => {
  try {
    const resolved = await Axios.get('/student/get-resolved', {
      withCredentials: true,
      headers: { 'x-user-email': email },
    })
    return resolved.data
  } catch (e) {
    console.error(e)
  }
}

const getStaffHall = async (email: string) => {
  try {
    const resolved = await Axios.get(`/staff/get-hall?email=${email}`, {
      withCredentials: true,
    })
    return resolved.data
  } catch (e) {
    console.error(e)
  }
}

const getStaffResolved = async (hall: string) => {
  try {
    const resolved = await Axios.get('/staff/staff-resolved', {
      withCredentials: true,
      headers: { 'x-staff-hall': hall },
    })
    return resolved.data
  } catch (e) {
    console.error(e)
  }
}

const getPersonnelResolved = async (email: string) => {
  try {
    const resolved = await Axios.get('/personnel/personnel-resolved', {
      withCredentials: true,
      headers: { 'x-personnel-email': email },
    })
    return resolved.data
  } catch (e) {
    console.error(e)
  }
}

export {
  getStudentResolved,
  getStaffHall,
  getStaffResolved,
  getPersonnelResolved,
}
