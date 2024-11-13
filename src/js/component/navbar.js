import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to='/'>
				<span className="navbar-brand mb-0 m-4 h1">Home</span>
			</Link>
			<div className="ml-auto m-2">
				<Link to='/create'>
					<button className="btn btn-success">Add new Contact</button>
				</Link>
			</div>

		</nav>
	);
};
