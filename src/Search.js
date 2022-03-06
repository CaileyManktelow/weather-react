import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          className="form-control"
          type="search"
          name=""
          placeholder="Change city"
        />

        <input className="search-button" type="submit" value="search" />
      </form>
    </div>
  );
}
