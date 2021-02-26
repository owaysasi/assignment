import logo from './logo.svg';
import DropDown from './Components/DropDown/DropDown';
import './App.css';
import DDPage from './Pages/DDPage/DDPage';
import PhoneP from './Pages/PhoneP/PhoneP';
import Error from './Pages/Error/Error';
import Ticketing from './Pages/Ticketing/Ticketing';
import Header from './Components/Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function App() {
  return (
    <Router basename="/pokemon">
      <div className="App">
        <Switch>
          <Route exact path="/ticketing" component={Ticketing} />
          <Route exact path="/ddpage" component={DDPage} />
          <Route exact path="/" component={PhoneP} />
          <Route>
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
