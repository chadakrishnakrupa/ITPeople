import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const AppHeader = () => {
	return (
		<AppBar
			position="static"
			title="Chainyard Application"
		>
			<Toolbar variant="dense">
				<Typography variant="h5" color="inherit">
					Chainyard Application
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
