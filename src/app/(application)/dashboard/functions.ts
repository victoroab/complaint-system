import { Axios } from '@/lib/axios'

export async function getUserData({
  email,
  userType,
}: {
  email: string
  userType: 'student' | 'staff' | 'personnel'
}) {
  try {
    const result = await Axios.get(
      `/user-data?usertype=${userType}&email=${email}`,
      {
        withCredentials: true,
      }
    )
    return result.data
  } catch (e) {
    console.error(e)
  }
}
