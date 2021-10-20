import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../pages/home/HomeScreen";
import { MovieScreen } from "../pages/movie/MovieScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/movie/:movieId" component={MovieScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
