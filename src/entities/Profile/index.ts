export { IProfile, IProfileSchema } from '../Profile/model/types/profile'

export {
  profileReducer,
  profileActions,
} from '../Profile/model//slice/profileSlice'

export { fetchProfileDataThunk } from '../Profile/model/services/fetchProfileData/fetchProfileData'

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export { getProfileData } from './model/selectors/getProfileData/getProfileData'
export { getProfileError } from './model/selectors/getProfileError/getProfileError'
export { getProfileIsReadonly } from './model/selectors/getProfileIsReadonly/getProfileIsReadonly'
