import { Axios } from '@/lib/axios'

const createComplaint = async ({
  hall,
  category,
  issue,
  email,
}: {
  hall: string
  category: string
  issue: string
  email: string
}) => {
  try {
    return await (
      await Axios.post(
        '/student/create-complaint',
        {
          hall,
          category,
          issue,
          email,
        },
        { withCredentials: true }
      )
    ).data
  } catch (e) {
    console.error(e)
  }
}

export { createComplaint }
