import React from "react";
import { NavItem, Navbar } from "react-materialize";

let navStyle = {
	background: "#38435a"
};
const Navigation = () => {
	return (
		<Navbar brand="Alfonso Montano" right fixed={true} style={navStyle}>
			<NavItem href="/">About</NavItem>
			<NavItem href="/">Portfolio</NavItem>
			<NavItem href="/">Contact</NavItem>
		</Navbar>
	);
};

export default Navigation;
