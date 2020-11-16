import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import HuntDetails from "./components/HuntDetails/HuntDetails/HuntDetails";
import MyOrders from "./components/MyOrders/MyOrders";
import Login from './components/Login/Login';

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
        <Route path="/home">
          <HuntDetails></HuntDetails>
        </Route>
        <Route path='/myOrders'>
          <MyOrders />
        </Route>
        <Route path='/login'>
          <Login> </Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
