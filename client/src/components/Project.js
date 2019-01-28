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
		display: "flex",
		flexWrap: "wrap"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	fab: {
		margin: theme.spacing.unit
	},
	avatar: {
		background: "#607d8b"
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
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
				{props.live.trim().length !== 0 ? (
					<Fab
						className={classes.fab}
						variant="extended"
						color="primary"
						onClick={() => redirectToPage(props.live)}
					>
						<FontAwesomeIcon icon={faEye} className={classes.extendedIcon} />
						Demo
					</Fab>
				) : (
					<></>
				)}
				<Fab
					className={classes.fab}
					variant="extended"
					color="secondary"
					onClick={() => redirectToPage(props.github)}
				>
					<FontAwesomeIcon icon={faGithub} className={classes.extendedIcon} />
					Repository
				</Fab>
			</CardActions>
		</Card>
	);
};

Project.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
