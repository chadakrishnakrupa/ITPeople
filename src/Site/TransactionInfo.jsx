import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function TransactionInfo(props) {

	return (
        
		<Paper>
           
            <h2>Transaction Information</h2>
			<TableContainer>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{props.keys.map((key) => {
									return <TableCell key={key}>{key.toUpperCase()}</TableCell>;
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								{props.keys.map((key) => {
										return (
											<TableCell key={key}>
												{typeof props.data[key] !== "object" ? (
													props.data[key]
												) : (
													""
												)}
											</TableCell>
										);
									})}
							</TableRow>
						</TableBody>
					</Table>
				            
			</TableContainer>
		</Paper>
	);
}
