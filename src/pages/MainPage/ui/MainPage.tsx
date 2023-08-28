import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return <div>{t('Main_page', 'Главная страница')}</div>
}

export default MainPage
