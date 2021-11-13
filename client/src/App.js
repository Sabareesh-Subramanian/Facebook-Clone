
import './App.css';

import LoginPage from './Components/Login/LoginPage';
import { AllRoutes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>

import { Route, Switch } from "react-router-dom";
import { UserProfile } from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <Switch>
    <Route path="/" exact>
    <LoginPage/>
    </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>

    </div>

  );
}

export default App;
