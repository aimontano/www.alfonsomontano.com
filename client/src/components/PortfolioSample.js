import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography } from "@material-ui/core";
import Project from "./Project.js";

let myProjects = require("./../projects.json");
myProjects = [myProjects[0], myProjects[1], myProjects[2]];

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 40,
		marginBottom: 40
	}
});

const PortfolioSample = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				UNC Coding Bootcamp Projects
			</Typography>
			<Grid container spacing={24}>
				{myProjects.map((project, id) => (
					<Grid item md id={id}>
						<Project
							title={project.name}
							image={project.image}
							github={project.githubLink}
							live={project.liveLink}
							description={project.description}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

PortfolioSample.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioSample);
