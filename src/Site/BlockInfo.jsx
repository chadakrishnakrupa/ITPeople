import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ModalPage } from "./ModalPage";

export default function BlockInfo(props) {
    
const [open, setOpen] = React.useState(false);
const [modaldata,setModalData]=React.useState(null);
const [modaltitle,setModalTitle]=React.useState(null);

const handleOpen = (e,key,props) => {
    e.preventDefault();
    console.log("open modal"+key+":"+props.data[key]);
    if(JSON.stringify(props.data[key]).length===2 && key==="next_block")
    {
        alert("No Data Present in "+key);
    }
    else{
    console.log("open modal else"+key+":");
  //  setOpen(true);
   // setModalData(props.data[key]);
   // setModalTitle(key);
    }
  
};

const handleClose = () => {
  setOpen(false);
};
	return (
		<Paper>
            <br/>
            <h2>Block Information</h2>
            {modaldata &&
            <ModalPage open={open} 
            handleClose={handleClose} 
            title={modaltitle} 
            data={modaldata} keys={Object.keys(JSON.stringify(modaldata))}/>
}
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
                                                    props.data[key] && (
                                                          <button  onClick={(e)=>handleOpen(e,key,props)}> View {key} </button>
													  )
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