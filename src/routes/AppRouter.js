import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../pages/home/HomeScreen";
import { MovieScreen } from "../pages/movie/MovieScreen";
import { BreadCrumb } from "../shared/BreadCrumb";
import { NavBar } from "../shared/NavBar";

export const AppRouter = () => {
  return (
    <Router className="bg-dark">
      <div>
        <NavBar />
        <BreadCrumb />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/movie/:movieID" component={MovieScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
