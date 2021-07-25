import { useTranslation } from 'react-i18next'
import { ProgressIndicator } from '../../../components'
import * as S from './styles'

function Skills() {
  const { t } = useTranslation()

  return (
    <S.Skills id='Skills'>
      <S.Progress>
        <ProgressIndicator percentage={99} description={t('skills.software_engineering')} />
        <ProgressIndicator percentage={90} description={t('skills.front')} />
        <ProgressIndicator percentage={50} description={t('skills.back')} />
        <ProgressIndicator percentage={25} description={t('skills.db')} />
        <ProgressIndicator percentage={50} description={t('skills.devops')} />
        <ProgressIndicator percentage={90} description={t('skills.automated_tests')} />
      </S.Progress>
    </S.Skills>
  )
}

export default Skills
