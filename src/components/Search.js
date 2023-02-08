import React from "react";

function Search({ searchBar, setSearchBar }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchBar("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
