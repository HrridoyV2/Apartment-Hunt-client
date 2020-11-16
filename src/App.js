import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddHouse from './components/Dashboard/AddHouse/AddHouse';
import MyRent from './components/Dashboard/MyRent/MyRent';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });


  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home/:id">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>


          {/* <Route path="/login">
            <Login> </Login>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Route> */}

          <Route path="/homeDetails">
            <HomeDetails></HomeDetails>
          </Route>

          <Route path='/login'>
            <Login> </Login>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/bookingList'>
            <BookingList></BookingList>
          </Route>
          <Route path='/addHouse'>
            <AddHouse></AddHouse>
          </Route>
          <Route path='/myRent'>
            <MyRent></MyRent>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;