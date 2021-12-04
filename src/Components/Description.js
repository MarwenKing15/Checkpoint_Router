import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./Styles/Description.css";

function Description({ movies, match, history }) {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		setMovie(movies.find((movie) => movie.id === +match.params.id));
	}, [movies, match.params.id]);
	return (
		<div>
			<h2 className="ttl">Description</h2>

			<br />
			<h2 className="ttl">{movie.title}</h2>
			<br />
			<Container>
				<Row>
					<Col>
						<p className="descrip">{movie.desc}</p>
					</Col>
					<Col>
						<iframe
							className="trailerVid"
							width="560"
							height="315"
							src={movie.trailerURL}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</Col>
				</Row>
			</Container>
			<button className="big-button" onClick={() => history.goBack()}>
				Go Back
			</button>
		</div>
	);
}

export default Description;
