import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import { Home, Folder, Phone } from "@material-ui/icons";

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	bar: {
		background: "#2196f3"
	}
};

function Navigation(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" color="inherit">
				<Toolbar>
					<Typography variant="h5" color="inherit" className={classes.grow}>
						Alfonso Montano
					</Typography>
					<IconButton color="primary">
						<Home />
					</IconButton>
					<IconButton color="secondary">
						<Folder />
					</IconButton>
					<IconButton color="default">
						<Phone />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
