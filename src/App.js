import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Error,
  Article,
  ArticlesList
} from './pages/';
import './App.css';

function App() {
  return (
    <Router>
      <div id='pages-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article' element={<Article />} >
            <Route path='article-list' element={<ArticlesList />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
