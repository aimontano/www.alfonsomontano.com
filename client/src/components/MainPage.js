import React from "react";
import Contact from "./Contact";
import About from "./About";
import PortfolioSample from "./PortfolioSample";
import { Grid } from "@material-ui/core";

const MainPage = props => {
	return (
		<React.Fragment>
			<Grid item md={10} xs={11}>
				<About />
				<PortfolioSample projects={props.projects} />
			</Grid>
			<Grid item md={4} xs={11}>
				<Contact />
			</Grid>
		</React.Fragment>
	);
};
export default MainPage;
