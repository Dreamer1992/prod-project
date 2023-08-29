export { IProfile, IProfileSchema } from '../Profile/model/types/profile'

export {
  profileReducer,
  profileActions,
} from '../Profile/model//slice/profileSlice'

export { fetchProfileDataThunk } from '../Profile/model/services/fetchProfileData/fetchProfileData'
