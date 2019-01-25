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
	Avatar,
	Fab
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/FolderOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const styles = theme => ({
	actions: {
		display: "flex"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	margin: {
		margin: theme.spacing.unit,
		fontSize: 18
	},
	avatar: {
		background: "#607d8b"
	}
});

const redirectToPage = url => {
	window.open(url, "_blank");
};

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
				<Fab
					className={classes.margin}
					size="small"
					color="primary"
					onClick={() => redirectToPage(props.live)}
				>
					<FontAwesomeIcon icon={faEye} />
				</Fab>
				<Fab
					className={classes.margin}
					size="small"
					color="secondary"
					onClick={() => redirectToPage(props.github)}
				>
					<FontAwesomeIcon icon={faGithub} />
				</Fab>
			</CardActions>
		</Card>
	);
};

Project.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
