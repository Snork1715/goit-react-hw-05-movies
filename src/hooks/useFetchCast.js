import { useState, useEffect } from "react";
import * as API from "../services/movies-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function useFetchCast(movieID) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    API.fetchCast(movieID)
      .then((res) => {
        setItems(res.cast);
        setStatus(res.cast.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieID]);
  return [items, status];
}

export { useFetchCast, Status };
