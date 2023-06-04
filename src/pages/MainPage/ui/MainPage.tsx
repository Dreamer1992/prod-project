import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')

  console.log(t('Главная страница'))

  return <div>{t('Главная страница')}</div>
}

export default MainPage
