import { useFetchCast, Status } from "../../hooks/useFetchCast";
import "./Cast.css";
import defaultImage from "../../images/defaultCast.png";
const IMAGE_URL = "https://image.tmdb.org/t/p/w342";

export default function Cast({ movieID }) {
  const [cast, status] = useFetchCast(movieID);
  return (
    <>
      {status === Status.RESOLVED && (
        <div className="cast">
          <ul className="castList">
            {cast.map(({ id, name, character, profile_path }) => (
              <li className="castItem" key={id}>
                <img
                  className="image"
                  src={
                    profile_path ? `${IMAGE_URL}${profile_path}` : defaultImage
                  }
                  alt={name}
                />
                <div className="descr">
                  <h5>{name}</h5>
                  <p className="character">Character:{character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === Status.REJECTED && (
        <p>We don't have any cast information for this movie.</p>
      )}
    </>
  );
}
