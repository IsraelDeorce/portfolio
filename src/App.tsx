import testBadge from './assets/test-badge.svg'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <img
        className="test-asset"
        src={testBadge}
        width="88"
        height="88"
        alt="Decorative test badge"
      />
      <p className="eyebrow">Portfolio</p>
      <h1>Israel Deorce</h1>
      <p className="intro">
        Hello! My new portfolio is currently under construction. Please check back soon to see my projects and experience!
      </p>
    </main>
  )
}

export default App
