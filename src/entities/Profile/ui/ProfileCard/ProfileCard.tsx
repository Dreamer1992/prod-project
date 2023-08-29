// hooks
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './ProfileCard.module.scss'

// ui
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'

// types
import { IProfile } from '../../model/types/profile'

interface IProps {
  data?: IProfile
  isLoading?: boolean
  error?: string
  className?: string
}

const ProfileCard = (props: IProps) => {
  const { className, data, isLoading, error } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, { [cls.loading]: isLoading }, [
          className,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t(
            'Profile_card.error_loading_profile',
            'Произошла ошибка при загрузке профиля'
          )}
          text={t(
            'Profile_card.try_refreshing_page',
            'Попробуйте обновить страницу'
          )}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Text
        className={cls.cardHeader}
        title={t('Profile_card.profile_title', 'Профиль')}
      />

      <div className={cls.editForm}>
        <Input
          value={data?.firstName}
          placeholder={t('Profile_card.form_firstName', 'Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastName}
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
