import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Skills from "./Skills";
import {
	Grid,
	Paper,
	ButtonBase,
	Typography,
	IconButton,
	Icon
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import MailIcon from "@material-ui/icons/Mail";
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
		width: "100%",
		height: 200
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
		borderRadius: 95
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
										src="/images/profile_image.jpg"
										alt="me"
									/>
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={24}>
									<Grid item xs>
										<Typography gutterBottom variant="h4">
											About Me
										</Typography>
										<Typography gutterBottom>
											This section will be dedicated to write about my thing and
											what I plan to do as a web developer
										</Typography>
										<IconButton
											component="a"
											href="www.linkedin.com/in/alfonso-montano"
											target="_blank"
										>
											<Icon color="primary">
												<FontAwesomeIcon icon={faLinkedin} />
											</Icon>
										</IconButton>

										<IconButton
											component="a"
											href="https://www.github.com/aimontano"
											target="_blank"
										>
											<Icon color="secondary">
												<FontAwesomeIcon icon={faGithub} />
											</Icon>
										</IconButton>

										<IconButton
											component="a"
											href="mailto:aimorales.montano@gmail.com"
											target="_blank"
										>
											<Icon color="inherit">
												<MailIcon />
											</Icon>
										</IconButton>
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
