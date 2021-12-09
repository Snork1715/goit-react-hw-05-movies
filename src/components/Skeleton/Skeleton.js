import Loader from "react-loader-spinner";
import "./Skeleton.css";

export default function Skeleton() {
  return (
    <Loader
      className="Skeleton"
      type="Circles"
      color="#006eff"
      height={60}
      width={60}
      timeout={2000} //3 secs
    />
  );
}
