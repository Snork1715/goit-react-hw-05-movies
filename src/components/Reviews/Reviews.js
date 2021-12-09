import { useParams } from "react-router-dom";
import { useFetchReviews, Status } from "../../hooks/useFetchReviews";
import "./Reviews.css";

function Reviews() {
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const [reviews, status] = useFetchReviews(movieID);

  return (
    <>
      {status === Status.RESOLVED && (
        <div className="reviews">
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li className="reviewsItem" key={id}>
                <p className="author">Author: {author}</p>
                <p className="content">{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === Status.REJECTED && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}

export default Reviews;
