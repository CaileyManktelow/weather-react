import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Type a city" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
