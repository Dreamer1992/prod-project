// hooks
import { useTranslation } from 'react-i18next'

// shared
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
  className?: string
  isShort?: boolean
}

export const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(isShort ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}
