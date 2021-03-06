import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Add({ movies, setMovies, setShow, show }) {
	const handleClose = () => setShow(false);

	const [title, setTitle] = useState("");
	const [posterURL, setPosterURL] = useState("");
	const [trailerURL, setTrailerURL] = useState("");
	const [desc, setDesc] = useState("");
	const [year, setYear] = useState(1990);
	const [rating, setRating] = useState(1);

	const handleShow = () => setShow(true);

	const handleName = (e) => {
		setTitle(e.target.value);
	};
	const handleURL = (e) => {
		setPosterURL(e.target.value);
	};
	const handleTrailer = (e) => {
		setTrailerURL(e.target.value);
	};
	const handleDesc = (e) => {
		setDesc(e.target.value);
	};
	const handleYear = (e) => {
		setYear(e.target.value);
	};
	const handleRating = (e) => {
		setRating(+e.target.value);
	};

	const handleAdd = () => {
		var id = movies.length + 1;
		const movie = { id, posterURL, trailerURL, title, year, rating, desc };
		setMovies([...movies, movie]);
		setTitle("");
		setPosterURL("");
		setTrailerURL("");
		setDesc("");
		setYear(1990);
		setRating(1);
	};

	return (
		<div>
			<a href="#addMovie">
				<FontAwesomeIcon
					icon={faPlusCircle}
					size="8x"
					color="white"
					onClick={handleShow}
				/>
			</a>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Form>
								<Form.Label>Movie's Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Movie's Name"
									value={title}
									onChange={handleName}
								/>

								<Form.Label>Movie's Poster URL</Form.Label>
								<Form.Control
									type="URL"
									placeholder="Movie's Poster URL"
									value={posterURL}
									onChange={handleURL}
								/>

								<Form.Label>Movie's Trailer URL</Form.Label>
								<Form.Control
									type="URL"
									placeholder="Movie's Trailer URL"
									value={trailerURL}
									onChange={handleTrailer}
								/>

								<Form.Label>Year</Form.Label>
								<Form.Control
									type="number"
									placeholder="Year"
									min="1900"
									value={year}
									onChange={handleYear}
								/>

								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									value={desc}
									onChange={handleDesc}
								/>

								<Form.Label>Rating</Form.Label>
								<Form.Control
									type="number"
									placeholder="Rating"
									max="5"
									step="1"
									value={rating}
									onChange={handleRating}
								/>
							</Form>
						</Card.Body>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancle
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							handleClose();
							handleAdd();
						}}
					>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Add;
