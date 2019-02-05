import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography, Fab } from "@material-ui/core";
import Project from "./Project.js";
import ViewAllIcon from "@material-ui/icons/ViewModule";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
	let projects = props.projects;

	// show only the first three projects in home page
	if (window.location.pathname !== "/projects")
		projects = [props.projects[0], props.projects[1], props.projects[2]];

	// scroll to the top
	window.scroll({ top: 0, left: 0, behavior: "smooth" });

	return (
		<div className={classes.root}>
			<Typography variant="h4">Projects</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Projects are laid out from most recent to oldest
			</Typography>
			<Grid container spacing={24}>
				{projects.map((project, id) => (
					<Grid item md={4} key={id}>
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
				size="medium"
				className={classes.fab}
				color="primary"
				component={Link}
				to={window.location.pathname === "/" ? "/projects" : "/"}
			>
				{window.location.pathname === "/" ? (
					<>
						<ViewAllIcon /> View All Projects
					</>
				) : (
					<>
						<Home /> Home
					</>
				)}
			</Fab>
			<br />
		</div>
	);
};

PortfolioSample.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioSample);
