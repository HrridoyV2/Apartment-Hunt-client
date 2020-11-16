import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails'
import MyOrders from "./components/MyOrders/MyOrders";
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
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
          <PrivateRoute path="/home/:id">
            <HomeDetails></HomeDetails>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/myOrders">
            <MyOrders />
          </Route>
          <Route path="/login">
            <Login> </Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
