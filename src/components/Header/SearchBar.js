import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <section className="search-container">
        <input type="text" name="search" placeholder="Search" id="search" />
        <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
    </section>
  );
}

export default SearchBar;
