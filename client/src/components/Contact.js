import React from "react";
import PropTypes from "prop-types";
import {
	withStyles,
	Paper,
	Typography,
	TextField,
	Fab
} from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	paper: {
		padding: 25,
		margin: "auto",
		marginBottom: 30
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	fab: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

const Contact = props => {
	const { classes } = props;
	return (
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="h4">
				Contact Me
			</Typography>
			<form className={classes.container}>
				<TextField
					required
					fullWidth
					id="outline-name"
					label="Name"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>
				<TextField
					required
					fullWidth
					id="outline-lastName"
					label="Last name"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>
				<TextField
					required
					fullWidth
					type="email"
					id="outline-email"
					label="Email"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>
				<TextField
					required
					fullWidth
					multiline
					id="outline-message"
					label="Message"
					className={classes.textField}
					margin="normal"
					variant="outlined"
					rows="10"
				/>
				<Fab
					color="primary"
					variant="extended"
					aria-label="Submit"
					className={classes.fab}
				>
					<NavigationIcon className={classes.extendedIcon} />
					Submit
				</Fab>
			</form>
		</Paper>
	);
};

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
