import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  // const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    // Search Term
    console.log("Search Term:", searchTerm);
    // Search Time

    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };
    try {
      // setIsLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchTerm}"}`,
        config
      );
      setSearchResult(response.data);

      // Response Data
      console.log("response", response.data);
      // Response Data
    } catch (error) {
      console.log("Error", error);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <section className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>

      {searchResult && (
        <div className="search-results">
          {searchResult.map((result) => (
            <div key={result.id} className="search-result">
              <h3>{result.title}</h3>
              <p>{result.artist}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchBar;
