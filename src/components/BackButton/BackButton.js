import { Link, useLocation } from "react-router-dom";
import { FcDownLeft as Arrow } from "react-icons/fc";
import "./BackButton.css";

export default function BackButton() {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <Link to={pathname ? `${pathname}${search}` : "/"} className="button">
      <Arrow className="icon" />
      Previous
    </Link>
  );
}
