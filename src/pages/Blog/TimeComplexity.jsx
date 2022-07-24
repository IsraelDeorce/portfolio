import bigOChart from '../../assets/big-o-chart.jpg'
import TSMBruteforce from '../../assets/TSMBruteforce.gif'
import QuicksortExample from '../../assets/Quicksort-example.gif'
import { JavascriptCode } from '../../components'
import { ALGS } from '../../utils/constants'
import * as S from './styles'

function TimeComplexity() {
  const mainImgStyle = {
    maxWidth: '700px',
    alignSelf: 'center'
  }
  return (
    <S.Blog>
      <h1>Time Complexity</h1>
      <p>Used to define the effectiveness of an algorithm, time complexity it is the amount of time taken for an algorithm to run.</p>
      <p>Below I've listed the most common classification for time complexity using the Big-O notation</p>

      <img style={mainImgStyle} src={bigOChart} />

      <h1>Constant time &mdash; O(1)</h1>
      <p>An algorithm that the runtime independs on the input size. It will always be the same.</p>
      <p>Example: Accessing an array index.</p>
      <JavascriptCode>{ALGS.ACCESS_ARRAY_INDEX}</JavascriptCode>
      <br />

      <h1>Logarithmic time &mdash; O(log n)</h1>
      <p>The number of operations gets reduced as the input size increases.</p>
      <p>Example: Binary Search.</p>
      <JavascriptCode>{ALGS.BINARY_SEARCH}</JavascriptCode>
      <br />

      <h1>Linear time &mdash; O(n)</h1>
      <p>The running time increases linearly with the length of the input.</p>
      <p>Example: Linear Search.</p>
      <JavascriptCode>{ALGS.LINEAR_SEARCH}</JavascriptCode>
      <br />

      <h1>Logarithmic-linear time &mdash; O(n log n)</h1>
      <p>The running time is n multiplied by log n, a logarithmic time complexity.</p>
      <p>Example: Quicksort.</p>
      <img style={{ maxWidth: '300px' }} src={QuicksortExample} />
      <JavascriptCode>{ALGS.QUICKSORT}</JavascriptCode>
      <br />

      <h1>Quadratic time &mdash; O(n^2)</h1>
      <p>The running time increases linearly with the length of the input.</p>
      <p>Example: Nested loop to find highest multiplication in an array</p>
      <JavascriptCode>{ALGS.NESTED_LOOP}</JavascriptCode>
      <br />

      <h1>Exponential time &mdash; O(2^n)</h1>
      <p>The running time increases linearly with the length of the input.</p>
      <p>Example: Recursive Hanoi Tower problem.</p>
      <JavascriptCode>{ALGS.TOWER_OF_HANOI}</JavascriptCode>
      <br />

      <h1>Factorial Time &mdash; O(n!)</h1>
      <p>The running time increases linearly with the length of the input.</p>
      <p>Example: Solving the travelling salesman with brute force:</p>
      <p>
        <i>"Given a list of cities and the distances between each pair of cities,
        what is the shortest possible route that visits each city exactly once
        and returns to the origin city?"</i>
      </p>
      <img style={{ maxWidth: '600px' }} src={TSMBruteforce} />
    </S.Blog>
  )
}

export default TimeComplexity
