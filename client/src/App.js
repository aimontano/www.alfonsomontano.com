import React, { Component } from "react";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import PortfolioSample from "./components/PortfolioSample";

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<FrontPage />
				<About />
				<PortfolioSample />
			</div>
		);
	}
}

export default App;
