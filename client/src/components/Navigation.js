import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
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
					</Typography>{" "}
					{window.location.pathname !== "/" ? (
						<IconButton color="inherit" component={Link} to="/">
							<Home />
						</IconButton>
					) : (
						<></>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
