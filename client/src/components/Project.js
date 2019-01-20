import React from "react";
import { Card } from "react-materialize";

const Project = props => {
	return (
		<Card>
			<div className="card-image">
				<img src={props.image} alt="project" />
				<a
					href={props.liveLink}
					className="btn-floating halfway-fab left waves-effect waves-light green"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="material-icons">link</i>
				</a>
				<a
					href={props.gitLink}
					className="btn-floating halfway-fab waves-effect waves-light blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="material-icons">sort</i>
				</a>
			</div>
			<div className="card-content">
				<span className="card-title">{props.name}</span>
				<p>{props.description}</p>
			</div>
		</Card>
	);
};

export default Project;
