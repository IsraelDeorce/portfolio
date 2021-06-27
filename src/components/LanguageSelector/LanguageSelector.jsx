import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Flags from 'country-flag-icons/react/3x2'
import { formatLanguage } from '../../utils'
import * as S from './styles'
import './LanguageSelector.scss'

function LanguageSelector() {
  const { language } = useSelector((state) => state.session)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(null)
  const [languageCode, setLanguage] = useState('')

  useEffect(() => {
    const formatedLanguage = formatLanguage(language)
    setLanguage(formatedLanguage)
    formatedLanguage === 'en'
      ? setFlag(<Flags.CA title='Canada' className='flag' />)
      : setFlag(<Flags.BR title='Brasil' className='flag' />)
  }, [language])

  const handleChangeLanguage = () => {
    dispatch.session.changeLanguage({
      language: languageCode === 'en' ? 'pt' : 'en'
    })
  }

  return (
    <S.LanguageSelector onClick={handleChangeLanguage}>
      <S.LanguageCode>
        {languageCode}
        {<MdKeyboardArrowDown />}
      </S.LanguageCode>
      {flag}
    </S.LanguageSelector>
  )
}

export default LanguageSelector
