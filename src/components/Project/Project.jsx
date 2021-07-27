import * as S from './styles'

function Project({ image, title, subtitle, description }) {
  return (
    <S.Project>
      <div>{image}</div>
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
      {description && <p>{description}</p>}
    </S.Project>
  )
}

export default Project
