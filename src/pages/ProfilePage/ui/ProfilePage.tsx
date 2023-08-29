import { useEffect } from 'react'

// hooks
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/hooks'
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

import {
  fetchProfileDataThunk,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'entities/Profile'
import ProfileCard from 'entities/Profile/ui/ProfileCard/ProfileCard'

import {
  TReducerList,
  DynamicModuleLoader,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: TReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  useEffect(() => {
    dispatch(fetchProfileDataThunk())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard data={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
