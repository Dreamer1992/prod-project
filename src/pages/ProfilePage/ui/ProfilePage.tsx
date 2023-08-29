import { useEffect } from 'react'

// hooks
import { useAppDispatch } from 'shared/lib/hooks/hooks'
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

import { fetchProfileDataThunk, profileReducer } from 'entities/Profile'
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

  useEffect(() => {
    dispatch(fetchProfileDataThunk())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
