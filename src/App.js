import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IsTriangle from "./pages/isTriangle";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IsTriangle} />
      </Switch>
    </Router>
  );
}

export default App;
