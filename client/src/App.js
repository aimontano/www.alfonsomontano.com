import React, { Component } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import PortfolioSample from "./components/PortfolioSample";
import { Grid, CssBaseline } from "@material-ui/core";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
	state = {};

	sendMessage = () => {
		let template_params = {
			from_name: `${this.state["outline-name"]} ${
				this.state["outline-lastName"]
			}`,
			to_name: "Alfonso Montano",
			message_html: this.state["outline-message"],
			reply_to: this.state["outline-email"]
		};

		const data = {
			service_id: "alfonso",
			template_id: "portfolio",
			user_id: "user_bmxUz6P57Eec1WIQmdQhW",
			template_params: template_params
		};
	};

	handleInputChange = event => {
		const { id, value } = event.target;
		this.setState({
			[id]: value
		});
	};

	render() {
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<CssBaseline>
						<Navigation />
						<Grid container justify="center">
							<Grid item md={10} xs={11}>
								<About />
								<PortfolioSample />
							</Grid>
							<Grid item md={4} xs={11}>
								<Contact
									sendMessage={this.sendMessage}
									handleInputChange={this.handleInputChange}
								/>
							</Grid>
						</Grid>
					</CssBaseline>
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
