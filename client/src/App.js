import React, { Component } from "react";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import PortfolioSample from "./components/PortfolioSample";
import { Grid, CssBaseline } from "@material-ui/core";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline>
					<Navigation />
					<FrontPage />
					<Grid container justify="center">
						<Grid item xs={11}>
							<About />
							<PortfolioSample />
						</Grid>
					</Grid>
				</CssBaseline>
			</React.Fragment>
		);
	}
}

export default App;
