import { Axios } from '@/lib/axios'

const createComplaint = async ({
  hall,
  category,
  issue,
  email,
  roomNumber,
}: {
  hall: string
  category: string
  issue: string
  email: string
  roomNumber: string
}) => {
  try {
    return await (
      await Axios.post(
        '/student/create-complaint',
        {
          hall,
          category,
          issue,
          roomNumber,
          email,
        },
        { withCredentials: true }
      )
    ).data
  } catch (e) {
    console.error(e)
  }
}

async function getStudentHall({ email }: { email: string }) {
  try {
    const result = await Axios.get(
      `/user-data?usertype=student&email=${email}`,
      {
        withCredentials: true,
      }
    )
    return result.data
  } catch (e) {
    console.error(e)
  }
}

export { createComplaint, getStudentHall }
