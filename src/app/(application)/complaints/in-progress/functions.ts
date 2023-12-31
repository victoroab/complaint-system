import { Axios } from '@/lib/axios'

const getInProgress = async () => {
  try {
    const pending = await Axios.get('/personnel/jobs', {
      withCredentials: true,
      headers: { 'x-personnel-email': 'test@personnel' },
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
