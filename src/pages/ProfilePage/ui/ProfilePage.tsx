import { useEffect } from 'react'

// hooks
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/hooks'
// import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

import {
  fetchProfileDataThunk,
  getProfileError,
  getProfileIsLoading,
  getProfileIsReadonly,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import ProfileCard from 'entities/Profile/ui/ProfileCard/ProfileCard'

import {
  TReducerList,
  DynamicModuleLoader,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'

const reducers: TReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  // const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const form = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const isReadonly = useSelector(getProfileIsReadonly)

  useEffect(() => {
    dispatch(fetchProfileDataThunk())
  }, [dispatch])

  const handleChangeFirstName = (value: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }))
  }

  const handleChangeLastName = (value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }))
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('profileFormWrapper', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          isReadonly={isReadonly}
          handleChangeFirstName={handleChangeFirstName}
          handleChangeLastName={handleChangeLastName}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
