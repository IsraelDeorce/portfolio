import { useTranslation } from 'react-i18next'
import { UIButton } from '../'
import './BlogButton.scss'

function BlogButton() {
  const { t } = useTranslation()

  return (
    <UIButton className='blog-button isDisabled' label={t('button.visit_my_blog')} onClick={() => null}/>
  )
}

export default BlogButton