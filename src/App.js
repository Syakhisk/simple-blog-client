import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";

const App = () => {
  const Routing = () => (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/post/:slug" component={About} />
    </Switch>
  );

  return (
    <Router>
      <Routing />
    </Router>
  )
};

export default App;
