import { BrowserRouter as Router, Route } from "react-router-dom";
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

// 326265690765-tfr5sorhjli6tf2m96ka0ggi5pijebsq.apps.googleusercontent.com
// y1t0TQ5yBDTvUWdZN2iutcrI
