import ProgressIndicator from './ProgressIndicator'
import * as S from './styles'

describe('<ProgressIndicator/>', () => {

  it.each([
    [-1], [0], [9], [10]
  ])('renders a progress bar with progress as 10 when percentage is %s', (percentage) => {
    expect(shallow(<ProgressIndicator percentage={percentage} />)
    .find(S.Progress).prop('percentage')).toBe(10)
  })

  it.each([
    [100], [101]
  ])('renders a progress bar with progress as 100 when percentage is %s', (percentage) => {
    expect(shallow(<ProgressIndicator percentage={percentage} />)
    .find(S.Progress).prop('percentage')).toBe(100)
  })

  it.each([
    [11], [99]
  ])('renders a progress bar with progress as %s when percentage is %s', (percentage) => {
    expect(shallow(<ProgressIndicator percentage={percentage} />)
    .find(S.Progress).prop('percentage')).toBe(percentage)
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<ProgressIndicator />)).toMatchSnapshot()
    })
  })
})
