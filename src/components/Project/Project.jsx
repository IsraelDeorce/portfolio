import * as S from './styles'

function Project({ image, title, subtitle, description }) {
  return (
    <S.Project>
      <div>{image}</div>
      {title && <S.Title>{title}</S.Title>}
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      {description && <p>{description}</p>}
    </S.Project>
  )
}

export default Project
