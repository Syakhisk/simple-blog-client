import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Landing from "pages/Landing";
import About from "pages/About";
import { Post } from "pages/Post";

const App = () => {
  const Routing = () => (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/post/:slug" component={Post} />
    </Switch>
  );

  return (
    <Router>
      <Routing />
    </Router>
  );
};

export default App;
