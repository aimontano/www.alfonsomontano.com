import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MainPage from "./components/MainPage";
import PortfolioSample from "./components/PortfolioSample";

let myProjects = require("./projects.json");

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#03a9f4",
			contrastText: "#fff"
		},
		secondary: {
			main: "#18202c",
			light: "#232f3e"
		}
	},
	typography: {
		useNextVariants: true
	}
});

class App extends Component {
	state = {
		projects: myProjects
	};

	render() {
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<CssBaseline>
						<Navigation />
						<Grid container justify="center">
							<Switch>
								<Route
									exact
									path="/"
									render={props => (
										<MainPage {...props} projects={this.state.projects} />
									)}
								/>
								<Route
									exact
									path="/projects"
									render={props => (
										<Grid item md={11}>
											<PortfolioSample
												{...props}
												projects={this.state.projects}
											/>
										</Grid>
									)}
								/>
							</Switch>
						</Grid>
					</CssBaseline>
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
