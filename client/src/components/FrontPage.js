import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
	media: {
		height: 500
	},
	card: {
		borderRadius: 0
	}
};

function FrontPage(props) {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image="https://wallpaperaccess.com/full/568191.png"
				title="Contemplative Reptile"
			/>
		</Card>
	);
}

FrontPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontPage);
