import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';


export const UserContext = createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className='container'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/destination/:carId'>
            <Destination ></Destination>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}


export default App;
