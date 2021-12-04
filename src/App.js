import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import MovieData from "./Components/assets/MovieData";
import Description from "./Components/Description";
import Error from "./Components/Error/Error";
import NavBar from "./Components/NavBar";
import About from "./Components/About";

function App() {
	var [movies, setMovies] = useState(MovieData);

	const [show, setShow] = useState(false);

	const [searchValue, setSearchValue] = useState("");

	const [value, setValue] = useState(0);

	return (
		<div className="App">
			<NavBar
				value={value}
				setValue={setValue}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<Switch>
				<Route exact path="/">
					<Filter
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						value={value}
						movies={movies}
						show={show}
						setShow={setShow}
						setMovies={setMovies}
					/>
				</Route>
				<Route path="/about" component={About} />
				<Route
					path="/description/:id"
					component={(props) => <Description {...props} movies={movies} />}
				/>
				<Route path="/*" component={Error} />
			</Switch>
			<br />

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
