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
	Button
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
	button: {
		margin: theme.spacing.unit
	},
	leftIcon: {
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
				className={classes.title}
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
					<Button
						size="small"
						color="primary"
						variant="outlined"
						onClick={() => redirectToPage(props.live)}
						className={classes.button}
					>
						<FontAwesomeIcon icon={faEye} className={classes.leftIcon} />
						Live
					</Button>
				) : (
					<></>
				)}
				<Button
					size="small"
					color="default"
					variant="outlined"
					onClick={() => redirectToPage(props.github)}
					className={classes.button}
				>
					<FontAwesomeIcon icon={faGithub} className={classes.leftIcon} />
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
