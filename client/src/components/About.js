import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Skills from "./Skills";
import { Grid, Paper, ButtonBase, Typography } from "@material-ui/core";

const styles = {
	root: {
		flexGrow: 1,
		marginTop: 20
	},
	paper: {
		padding: 25,
		margin: "auto"
	},
	image: {
		width: 200,
		height: 200
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
		borderRadius: "100%"
	},
	text: {
		fontSize: "1.1rem"
	}
};

const About = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Grid container justify="center" spacing={24}>
				<Grid item xs>
					<Paper className={classes.paper}>
						<Grid container spacing={24} justify="center">
							<Grid item>
								<ButtonBase className={classes.image}>
									<img
										className={classes.img}
										src="https://react-materialize.github.io/img/sample-1.jpg"
										alt="sample"
									/>
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={24}>
									<Grid item xs>
										<Typography gutterBottom variant="h4">
											About Me
										</Typography>
										<Typography gutterBottom className={classes.text}>
											This section will be dedicated to write about my thing and
											what I plan to do as a web developer
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs>
					<Skills />
				</Grid>
			</Grid>
		</div>
	);
};

About.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
