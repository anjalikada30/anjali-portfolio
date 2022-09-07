import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false)
  const navClick = ()=>{
    setNavToggle(!navToggle)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className={`sidebar ${navToggle ?'nav-toggle': ''}`}>
          <Navbar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/experience" exact>
                <ExperiencePage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
