import axios from 'axios'

// constants
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

export const clientApi = axios.create({
  baseURL: __API_URL__,
  headers: { Authorization: user || '' },
})
