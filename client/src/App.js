import {Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Policy from './components/pages/Policy';
import PageNotFound from './components/pages/PageNotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/policy' element={<Policy />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
