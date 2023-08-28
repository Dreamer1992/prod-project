import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return <div>{t('About_us', 'О нас')}</div>
}

export default AboutPage
