import './Home.scss';

function Home() {
  return (
    <section className='home' style={{
      backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/Vancouver.jpg)'
    }}>
      <h1>Israel Deorce</h1>
      <p className='subtitle'>Software Engineer</p>
    </section>
  )
}

export default Home;