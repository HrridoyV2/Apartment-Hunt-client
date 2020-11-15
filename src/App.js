import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import HuntDetails from './components/HuntDetails/HuntDetails/HuntDetails';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <HuntDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
