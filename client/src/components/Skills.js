import React from "react";
import {
	Paper,
	Typography,
	withStyles,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from "@material-ui/core";
import PropTypes from "prop-types";
const jobSkills = require("./../skills.json");

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: "100%",
		marginTop: theme.spacing.unit * 3
	},
	table: {},
	paper: {
		padding: 25,
		margin: "auto",
		overflow: "auto"
		// background: primary
	}
});

// id is to store the array item id
let id = 0;

// stores all skills objects
let rows = [];

// create data returns an object
// takes three params: front-end skill,
// back-end skill & other skill
function createData(frontEnd, backEnd, other) {
	id += 1;
	if (frontEnd === undefined) frontEnd = "";
	if (backEnd === undefined) backEnd = "";
	if (other === undefined) other = "";
	return { id, frontEnd, backEnd, other };
}

// function pushes object item to rows by calling
// createData function
const pushData = type => {
	for (let i = 0; i < jobSkills[type].length; i++) {
		rows.push(
			createData(
				jobSkills["front-end"][i],
				jobSkills["back-end"][i],
				jobSkills["other"][i]
			)
		);
	}
};

// function checks which skill array has the most values
// based on lenght, the array is looped through to get
// all items and display them by calling pushData function
const storeData = () => {
	if (
		jobSkills["front-end"].length > jobSkills["back-end"].length &&
		jobSkills["front-end"].length > jobSkills["other"].length
	) {
		return pushData("front-end");
	} else if (
		jobSkills["back-end"].length > jobSkills["front-end"].length &&
		jobSkills["back-end"].length > jobSkills["other"].length
	) {
		return pushData("back-end");
	} else {
		return pushData("other");
	}
};

storeData();

const Skills = props => {
	const { classes } = props;
	return (
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="h4">
				My Skills
			</Typography>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Front-End</TableCell>
						<TableCell>Back-End</TableCell>
						<TableCell>Other</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(({ id, frontEnd, backEnd, other }) => (
						<TableRow key={id}>
							<TableCell>{frontEnd}</TableCell>
							<TableCell>{backEnd}</TableCell>
							<TableCell>{other}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

Skills.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
