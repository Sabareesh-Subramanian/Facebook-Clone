import { Route, Switch } from "react-router-dom";
import { UserProfile } from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
