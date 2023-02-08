import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

function App() {
  const [listings, setListings] = useState([])
  const [searchBar, setSearchBar] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListings(data))
  }, [])

  function onDelete(id) {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  const searchListings = listings.filter((listing) => listing.description.toLowerCase().includes(searchBar.toLowerCase()))

  return (
    <div className="app">
      <Header>
        <Search 
          searchBar={searchBar}
          setSearchBar={setSearchBar}
        />
      </Header>
      <ListingsContainer 
        listings={searchBar === "" ? listings : searchListings}
        onDelete={onDelete} 
      />
    </div>
  );
}

export default App;
