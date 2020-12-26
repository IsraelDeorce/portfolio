import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Error,
  Article,
  ArticlesList
} from './pages/';
import { NavBar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <div id='app' className='App'>
        <NavBar />
        <div id='pages-body' className='page-body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles-list' element={<ArticlesList />} />
            <Route path='/article' element={<Article />} />
            {/* <Route path='/article' element={<Article />} >
              <Route path='articles-list' element={<ArticlesList />} />
            </Route> */}
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
