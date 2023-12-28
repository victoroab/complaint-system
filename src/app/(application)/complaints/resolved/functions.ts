import { Axios } from '@/lib/axios'

const getStudentResolved = async () => {
  try {
    const resolved = await Axios.get('/student/get-resolved', {
      withCredentials: true,
      headers: { 'x-user-email': 'test@test' },
    })
    return resolved.data
  } catch (e) {
    console.error(e)
  }
}

export { getStudentResolved }
