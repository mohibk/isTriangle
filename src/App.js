import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IsTriangle from "./pages/isTriangle";
import Navbar from "./components/Navbar";
import Quiz from "./pages/quiz";
import Hypotenuse from "./pages/hypotenuse";
import Area from "./pages/area";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IsTriangle} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/hypotenuse" component={Hypotenuse} />
        <Route path="/area" component={Area} />
      </Switch>
    </Router>
  );
}

export default App;
