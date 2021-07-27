import { Trans, useTranslation } from 'react-i18next'
import { Project } from '../../../components'
import { projects } from './utils'
import * as S from './styles'

function Experience() {
  const { t } = useTranslation()
  return (
    <S.Experience id='experience'>
      <h2>{t('button.experience')}</h2>
      <S.Projects>
        {projects.map((p, i) =>
          <Project
            key={i}
            image={p.image}
            title={t(p.title)}
            subtitle={t(p.subtitle)}
            description={<Trans>{p.description}</Trans>}
          />
        )}
      </S.Projects>
    </S.Experience>
  )
}

export default Experience
