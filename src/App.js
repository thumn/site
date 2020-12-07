import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Photography from "./pages/photography";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      {/*All our Routes goes here!*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/photo" component={Photography} />
      <Route exact path="/projects" component={Projects} />
    </Router>
  );
}

export default App;
