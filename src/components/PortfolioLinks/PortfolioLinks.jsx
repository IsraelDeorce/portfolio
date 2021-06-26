import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

const propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

function PortfolioLinks({ orientation = 'horizontal', onClick }) {
  const { t } = useTranslation()

  return (
    <S.PortfolioLinks orientation={orientation} onClick={onClick}>
      <a href='#sec1'>{t('button.skills')}</a>
      <a href='#sec2'>{t('button.projects')}</a>
      <a href='#sec3'>{t('button.education')}</a>
      <a href='#sec4'>{t('button.contact')}</a>
    </S.PortfolioLinks>
  )
}

PortfolioLinks.propTypes = propTypes

export default PortfolioLinks
