import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import Skills from "./Skills";

const About = () => {
	return (
		<div className="container" style={{ marginTop: 25 }}>
			<CardPanel>
				<Row>
					<Col s={12} m={4}>
						<img
							src="https://react-materialize.github.io/img/sample-1.jpg"
							className="circle responsive-img"
							alt="User profile"
						/>
					</Col>

					<Col s={12} m={8}>
						<h3 className="center">About Me</h3>
						<p>Write a brief description about me</p>
					</Col>
				</Row>
			</CardPanel>
			<Skills />
		</div>
	);
};

export default About;
