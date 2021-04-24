import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NavBar.scss'

function NavBar() {
  const { t } = useTranslation()
  const { language } = useSelector((state) => state.session)
  const dispatch = useDispatch()

  const handleChangeLanguage = () => {
    let newLanguage
    if (language === 'en') newLanguage = 'pt'
    else newLanguage = 'en'
    dispatch.session.changeLanguage({ language: newLanguage })
  }

  return (
    <div id='navbar'>
      <nav>
        <ul>
          <li>
            <Link to='/'>{t('button.home')}</Link>
          </li>
          <li onClick={handleChangeLanguage}>
            <Link to=''>{t('button.translate')}</Link>
          </li>
          <li>
            <Link to='/articles-list'>{t('button.contact')}</Link>
          </li>
        </ul>        
      </nav>
    </div>
  )
}

export default NavBar