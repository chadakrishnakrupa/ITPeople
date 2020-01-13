import React, { Component } from "react";
import { Divider,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';


class AlertMessage extends Component {
	constructor(props) {
		super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
	
		this.state = {
			open: true
		};
	}

	handleClose() {
		this.setState({ open: false });
		console.log("props.OnCloseWindow:"+this.props.OnCloseWindow);
		if (this.props.OnCloseWindow)
		{
			this.props.OnCloseWindow();
		}
	};
	render() {
		return (
			<Dialog
				open={this.state.open}
				fullWidth={true}
				onClose={() => this.handleClose()}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description" >
				<DialogTitle style={{marginLeft: "10px"}} id="alert-dialog-title"> 
					<span  style={{ marginLeft: "10px"}} >Alert</span>
					<Divider/>
				</DialogTitle>
				<DialogContent style={{marginLeft: "10px"}}>
					<DialogContentText id="alert-dialog-description">
					<span  style={{ fontSize:"20px", fontWeight:"bold"}} >{this.props.MessageText}</span> 
					</DialogContentText>
				</DialogContent>
				<DialogActions style={{marginRight: "40px", marginBottom: "25px"}}>
					<button onClick={() => this.handleClose()}  autoFocus> OK </button>
				</DialogActions>
			</Dialog>
		);
	}
}

export { AlertMessage };
