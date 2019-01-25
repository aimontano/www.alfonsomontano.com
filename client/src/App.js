import React, { Component } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import PortfolioSample from "./components/PortfolioSample";
import { Grid, CssBaseline } from "@material-ui/core";
import Contact from "./components/Contact";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline>
					<Navigation />
					<Grid container justify="center">
						<Grid item md={10} xs={11}>
							<About />
							<PortfolioSample />
						</Grid>
						<Grid item md={6} xs={11}>
							<Contact />
						</Grid>
					</Grid>
				</CssBaseline>
			</React.Fragment>
		);
	}
}

export default App;
