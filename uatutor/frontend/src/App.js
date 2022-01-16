import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';
import EditProfile from './EditProfile';
import TutorDetails from './TutorDetails';

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
            <Route exact path = '/about'>
              <About/>
            </Route>
            <Route exact path = '/editprofile'>
              <EditProfile/>
            </Route>
            <Route exact path= '/tutors/:id'>
              <TutorDetails/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;