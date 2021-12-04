import React from "react";

import { Navbar, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Styles/NavBar.css";

function NavBar() {
	return (
		<div>
			<Navbar bg="red" variant="dark">
				<Row>
					<Col>
						<Container className="linkss">
							<NavLink
								exact
								className="navLink"
								to="/"
								activeClassName="selectedLink"
							>
								Home
							</NavLink>
							<NavLink
								className="navLink"
								activeClassName="selectedLink"
								to="/about"
							>
								About
							</NavLink>
						</Container>
					</Col>
				</Row>
			</Navbar>
		</div>
	);
}

export default NavBar;
