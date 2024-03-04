import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string

export const Axios = axios.create({
  baseURL: BASE_URL,
})
