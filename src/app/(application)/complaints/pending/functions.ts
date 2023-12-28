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

export { getStudentPending }
