import { Axios } from '@/lib/axios'

const getInProgress = async (email: string) => {
  try {
    const pending = await Axios.get('/personnel/jobs', {
      withCredentials: true,
      headers: { 'x-personnel-email': email },
    })
    return pending.data
  } catch (e) {
    console.error(e)
  }
}

const fix = async ({ id }: { id: string }) => {
  try {
    await Axios.put(
      '/personnel/fix-complaint',
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

export { getInProgress, fix }
