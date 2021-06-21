import { useTranslation } from 'react-i18next'

import * as S from './styles'

function MenuLinks({ isOpen }) {
  const { t } = useTranslation()

  const list =
    <>
      <a href='#home'>{t('button.skills')}</a>
      <a href='#sec1'>{t('button.projects')}</a>
      <a href='#sec2'>{t('button.education')}</a>
      <a href='#sec3'>{t('button.awards')}</a>
      <a href='#sec4'>{t('button.curiosities')}</a>
      <a href='#sec5'>{t('button.contact')}</a>
    </>

  return (
    <S.MenuLinks isOpen={isOpen}>{list}</S.MenuLinks>
  )
}

export default MenuLinks
