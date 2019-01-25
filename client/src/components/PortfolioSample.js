import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography, Fab } from "@material-ui/core";
import Project from "./Project.js";
import ViewAllIcon from "@material-ui/icons/ViewModule";

let myProjects = require("./../projects.json");
myProjects = [myProjects[0], myProjects[1], myProjects[2]];

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 40,
		marginBottom: 25
	},
	fab: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
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
					<Grid item md key={id}>
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
			<br />
			<Fab
				variant="extended"
				aria-label="View All"
				className={classes.fab}
				color="primary"
			>
				<ViewAllIcon />
				View All Projects
			</Fab>
			<br />
		</div>
	);
};

PortfolioSample.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioSample);
