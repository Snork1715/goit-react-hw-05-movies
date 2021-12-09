import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import "./DetailsMovieAdditional.css";

export default function DetailsMovieAdditional() {
  const location = useLocation();

  const applyActiveClass = ({ isActive }) =>
    isActive ? "addLink addActive-link" : "addLink";

  return (
    <div>
      <NavLink
        to="cast"
        state={{ from: location.state?.from }}
        className={applyActiveClass}
      >
        Cast
      </NavLink>
      <NavLink
        to="reviews"
        state={{ from: location.state?.from }}
        className={applyActiveClass}
      >
        Reviews
      </NavLink>
    </div>
  );
}
