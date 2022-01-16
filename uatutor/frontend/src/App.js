import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = "Welcome to UATutor"
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>
            <Route exact path = '/profile'>
              <Profile/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;