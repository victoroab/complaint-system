import { Axios } from '@/lib/axios'

const getStudentPending = async () => {
  try {
    const pending = await Axios.get('/student/get-pending', {
      withCredentials: true,
      headers: { 'x-user-email': 'test@test' },
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

export { getStudentPending, getStaffPending, getPersonnelPending }
