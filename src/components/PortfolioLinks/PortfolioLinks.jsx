import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link';
import * as S from './styles'

const propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  onCLick: PropTypes.func
}

function PortfolioLinks({ orientation = 'horizontal', onClick }) {
  const { t } = useTranslation()

  return (
    <S.PortfolioLinks orientation={orientation} onClick={onClick}>
      <HashLink to='#about'>{t('button.about')}</HashLink>
      <HashLink to='#skills'>{t('button.skills')}</HashLink>
      <HashLink to='#experience'>{t('button.experience')}</HashLink>
      <HashLink to='#contact'>{t('button.contact')}</HashLink>
    </S.PortfolioLinks>
  )
}

PortfolioLinks.propTypes = propTypes

export default PortfolioLinks
