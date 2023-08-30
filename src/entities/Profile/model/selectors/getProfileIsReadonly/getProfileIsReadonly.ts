import { IStateSchema } from 'app/providers/StoreProvider'

export const getProfileIsReadonly = (state: IStateSchema) =>
  state.profile?.isReadonly
