import React from "react";
import { Card } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Project = props => {
	return (
		<Card>
			<div className="card-image">
				<img src={props.image} alt="project" />
				<a
					href={props.liveLink}
					className="btn-floating halfway-fab left waves-effect waves-light blue lighten-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i>
						<FontAwesomeIcon icon={faEye} />
					</i>
				</a>
				<a
					href={props.gitLink}
					className="btn-floating halfway-fab waves-effect waves-light orange accent-3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i>
						<FontAwesomeIcon icon={faCodeBranch} />
					</i>
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
