import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import MyOrders from "./components/MyOrders/MyOrders";
import HomeDetails from "./components/HomeDetails/HomeDetails/HomeDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/homeDetails">
          <HomeDetails></HomeDetails>
        </Route>
        <Route path='/myOrders'>
          <MyOrders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
