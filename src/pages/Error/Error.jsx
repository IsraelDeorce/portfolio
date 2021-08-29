import { useLocation, useHistory } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { UIButton } from '../../components'
import * as S from './styles'

function Error() {
  const { pathname } = useLocation()
  const history = useHistory()

  return (
    <S.Error>
      <h3>
        <Trans i18nKey="errors.resource_not_found">
          <strong>{{ pathname }}</strong>
        </Trans>
      </h3>
        <UIButton label='Go Back' onClick={history.goBack} />
    </S.Error>
  )
}

export default Error
