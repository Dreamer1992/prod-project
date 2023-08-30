// hooks
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/hooks'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './ProfilePageHeader.module.scss'

// ui
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonColor, ButtonVariant } from 'shared/ui/Button/Button'

import { getProfileIsReadonly, profileActions } from 'entities/Profile'

// interface IProps {
//   data?: IProfile
//   isLoading?: boolean
//   error?: string
//   className?: string
// }

export const ProfilePageHeader = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('profile')

  const isReadonly = useSelector(getProfileIsReadonly)

  const handleEdit = () => {
    dispatch(profileActions.setReadonly(false))
  }

  const handleCancelEdit = () => {
    dispatch(profileActions.cancelEdit())
  }

  return (
    <div className={cls.cardHeader}>
      <Text
        className={cls.text}
        title={t('Profile_card.profile_title', 'Профиль')}
      />

      {isReadonly ? (
        <Button
          className={cls.editBtn}
          variant={ButtonVariant.OUTLINED}
          onClick={handleEdit}
        >
          {t('Profile_card.btn_edit', 'Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            variant={ButtonVariant.OUTLINED}
            onClick={handleCancelEdit}
          >
            {t('Profile_card.btn_cancel', 'Отменить')}
          </Button>

          <Button
            className={cls.editBtn}
            variant={ButtonVariant.OUTLINED}
            color={ButtonColor.ERROR}
            onClick={handleCancelEdit}
          >
            {t('Profile_card.btn_cancel', 'Отменить')}
          </Button>
        </>
      )}
    </div>
  )
}
