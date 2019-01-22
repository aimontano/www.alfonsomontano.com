import React from "react";
import { Row, Col, Icon } from "react-materialize";
import CardPanel from "react-materialize/lib/CardPanel";
import Project from "./Project";
import Button from "react-materialize/lib/Button";

let myProjects = require("./../projects.json");

myProjects = [myProjects[0], myProjects[1], myProjects[2]];

const PortfolioSample = () => {
	return (
		<div className="container">
			<CardPanel>
				<h4>UNC Coding Bootcamp Projects</h4>
				<Row>
					{myProjects.map((item, id) => (
						<Col m={6} l={4} key={id}>
							<Project
								name={item.name}
								gitLink={item.githubLink}
								liveLink={item.liveLink}
								description={item.description}
								image={item.image}
							/>
						</Col>
					))}
				</Row>
				<Button waves="light" className="blue">
					View All<Icon right>add</Icon>
				</Button>
			</CardPanel>
		</div>
	);
};

export default PortfolioSample;
