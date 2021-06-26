import { useTranslation } from 'react-i18next'
import { UIButton } from '../'

function BlogButton() {
  const { t } = useTranslation()

  return (
    <UIButton label={t('button.visit_my_blog')} />
  )
}

export default BlogButton