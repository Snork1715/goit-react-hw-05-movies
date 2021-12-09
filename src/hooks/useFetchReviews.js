import { useState, useEffect } from "react";
import * as API from "../services/movies-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function useFetchReviews(movieID) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    API.fetchReviews(movieID)
      .then((res) => {
        setItems(res.results);
        setStatus(res.results.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieID]);
  return [items, status];
}

export { useFetchReviews, Status };
