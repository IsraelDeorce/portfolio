import * as S from './styles'

function ProgressIndicator({ percentage = 0, description = '' }) {

  function handlePercentage() {
    if (percentage < 10) return 10
    if (percentage > 100) return 100
    return percentage
  }

  return (
    <S.ProgressIndicator>
      <S.ProgressBar>
        <S.Progress percentage={handlePercentage()} />
      </S.ProgressBar>
      {description && <div>{description}</div>}
    </S.ProgressIndicator>
  )
}

export default ProgressIndicator
