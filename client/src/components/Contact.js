import React from "react";
import PropTypes from "prop-types";
import {
	withStyles,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const styles = theme => ({
	paper: {
		padding: 25,
		margin: "auto",
		marginBottom: 30
	}
});

const Contact = props => {
	const { classes } = props;
	return (
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="h4">
				Contact Me
			</Typography>
			<Typography>You may reach me at my email:</Typography>
			<List component="nav">
				<ListItem
					button
					href="mailto:aimorales.montano@gmail.com"
					component="a"
				>
					<ListItemIcon>
						<MailIcon />
					</ListItemIcon>
					<ListItemText primary="aimorales.montano@gmail.com" />
				</ListItem>
			</List>
		</Paper>
	);
};

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
