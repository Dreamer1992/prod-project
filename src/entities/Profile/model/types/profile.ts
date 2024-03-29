import { ECountry, ECurrency } from 'shared/const/common'

export const PROFILE = 'PROFILE'

export interface IProfile {
  firstName: string
  lastName: string
  age: number
  currency: ECurrency
  country: ECountry
  city: string
  username: string
  avatar: string
}

export interface IProfileSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  isReadonly: boolean
}
