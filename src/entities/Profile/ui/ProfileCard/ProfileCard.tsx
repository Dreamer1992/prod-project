// hooks
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './ProfileCard.module.scss'

// ui
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

// selectors
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Input } from 'shared/ui/Input/Input'

interface IProps {
  className?: string
}

const ProfileCard = ({ className }: IProps) => {
  const { t } = useTranslation('profile')

  const profile = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Text
        className={cls.cardHeader}
        title={t('Profile_card.profile_title', 'Профиль')}
      />

      <div className={cls.editForm}>
        <Input
          value={profile?.firstName}
          placeholder={t('Profile_card.form_firstName', 'Ваше имя')}
          className={cls.input}
        />
        <Input
          value={profile?.lastName}
          placeholder={t('Profile_card.form_lastName', 'Ваша фамилия')}
          className={cls.input}
        />
      </div>

      <div className={cls.wrapperBtn}>
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Profile_card.btn_edit', 'Редактировать')}
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard
