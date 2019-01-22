import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
	root: {
		flexGrow: 1
	},
	center: {
		// margin: "auto"
	},
	bar: {
		background: "#2196f3"
	}
};

function Navigation(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" style={styles.bar}>
				<Toolbar>
					<Typography variant="h5" color="inherit" className={classes.center}>
						Alfonso Montano
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
