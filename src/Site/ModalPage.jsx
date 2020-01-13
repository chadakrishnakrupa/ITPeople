import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


export const ModalPage=(props) =>{
   // alert(props.data);
    //alert(props.keys);
   // alert(props.title);
    //alert(props.data);
    //alert(props.keys);
    //alert("Json"+JSON.stringify(props.data));
    
  //  alert("Json keys"+JSON.stringify(props.keys));
 const data=[...props.data];
 const keys=[...props.keys];
 console.log(data);
 console.log(keys);
  // getModalStyle is not a pure function, we roll the style only on the first render
 // const [modalStyle] = React.useState(getModalStyle);
 

  return (
    <div>
   
      {props.data &&
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <div style={{marginTop:"30px",left:"50px"}} >
          <h2 id="simple-modal-title">Details</h2>
          <p id="simple-modal-description">
          <Paper>
            <br/>
            <h2>Information</h2>
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
                        {data.map((row)=>
							<TableRow>

                        {Object.keys(row).map((key) => {
                        return(
                            <TableCell key={key}>
                        {typeof row[key] !== "object" ? (
                                                                    row[key]
                                                                ) : (
                                                                    "View Details"
                                                                )
                                                                }
                                </TableCell>
                                )
                            }
                        )}
                     </TableRow>
                     )}
						</TableBody>
					</Table>
				            
			</TableContainer>
		</Paper>
          </p>
        </div>
      </Modal>
}
    </div>
  );
}
