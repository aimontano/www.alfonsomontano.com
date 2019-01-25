import React from "react";
import PropTypes from "prop-types";
import {
	withStyles,
	Card,
	CardHeader,
	Typography,
	CardMedia,
	CardActions,
	CardContent,
	Button,
	Avatar
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/FolderOpen";

const styles = theme => ({
	actions: {
		display: "flex"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	}
});

const Project = props => {
	const { classes } = props;
	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="Project" className={classes.avatar}>
						<FolderIcon />
					</Avatar>
				}
				title={props.title}
			/>
			<CardMedia
				className={classes.media}
				image={props.image}
				title={props.title}
			/>
			<CardContent>
				<Typography component="p">{props.description}</Typography>
			</CardContent>
			<CardActions className={classes.actions} disableActionSpacing>
				<Button size="small" color="primary">
					Demo
				</Button>
				<Button size="small" color="default">
					Repository
				</Button>
			</CardActions>
		</Card>
	);
};

Project.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
