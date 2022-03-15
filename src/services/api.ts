import axios from 'axios'

export const api = axios.create({
  // baseURL: "http://localhost:3000/api"
  baseURL: "https://dashgo-ignite-pedropaulodf.vercel.app/api"
})