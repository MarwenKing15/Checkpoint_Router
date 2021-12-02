import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import "./App.css";

import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import MovieData from "./Components/assets/MovieData";
import Add from "./Components/Add";
import Description from "./Components/Description";

function App() {
  var [movies, setMovies] = useState(MovieData);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      {/* <Switch> */}
      <Route exact path="/">
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          movies={movies}
        />
      </Route>
      {/* <Route path="/description" component={Description} /> */}
      {/* </Switch> */}
      <br />
      <a href="#addMovie">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="8x"
          color="white"
          onClick={handleShow}
        />
      </a>

      <div>
        <Add
          show={show}
          setShow={setShow}
          setMovies={setMovies}
          movies={movies}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
