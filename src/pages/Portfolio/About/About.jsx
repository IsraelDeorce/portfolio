import { useTranslation } from 'react-i18next'
import * as S from './styles'

function About() {
  const { t } = useTranslation()
  return (
    <section id='about'>
      <h2>{t('button.about_me')}</h2>
      <S.TextAbout>
        <p>{t('desc.about_1')}</p>
        <p>{t('desc.about_2')}</p>
      </S.TextAbout>
    </section>
  )
}

export default About
