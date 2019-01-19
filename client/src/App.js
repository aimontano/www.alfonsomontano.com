import React, { Component } from "react";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import About from "./components/About";

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<FrontPage />
				<About />
			</div>
		);
	}
}

export default App;
