import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../pages/home/HomeScreen";
import { MovieScreen } from "../pages/movie/MovieScreen";
import { NavBar } from "../shared/NavBar";

export const AppRouter = () => {
  return (
    <Router className="bg-dark">
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/movie" component={MovieScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
