import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./SearchMovie.css";

export default function SearchMovie({ onHandleSubmit }) {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    onHandleSubmit(query.trim().toLowerCase());
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        type="text"
        name="searchQuery"
        value={query}
        autoComplete="off"
        onChange={handleInput}
        placeholder="Search movies"
      ></input>
      <button className="button" type="submit">
        <GoSearch />
      </button>
    </form>
  );
}
