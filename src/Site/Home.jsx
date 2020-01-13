import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {Container,
	Radio,
	RadioGroup,
	FormControlLabel,
	InputBase,
	IconButton,
	CircularProgress
} from "@material-ui/core";
import LatestBlockInfo from "./LatestBlock";
import BlockInfo from "./BlockInfo";
import { AlertMessage } from "../_Messages/AlertMessage";
import TransactionInfo from "./TransactionInfo";

const proxyurl = 
"https://radiant-peak-16520.herokuapp.com/";
//"https://cors-anywhere.herokuapp.com/";
const baseurl = "https://blockchain.info/";

export const Home = () => {

const handleAlertClose=()=>{
    setOpenAlert(false);

}
    
const [latestblockdata, setLatestblockdata] = useState(null);

const [blockdata, setBlockdata] = useState([]);
const [blockdatakeys, setBlockdataKeys] = useState([]);

const [openAlert,setOpenAlert]=useState(false);

const [transactionblockdata, setTransactionBlockdata] = useState([]);
const [transactionblockdatakeys, setTransactionBlockdataKeys] = useState([]);
    
const[loadinglatestblockind,setLoadinglatestblockind]=useState(true);
const[loadingblockind,setLoadingblockind]=useState(true);
const[loadingtransactionind,setLoadingtransactionind]=useState(true);

const[showBlock,setShowblock]=useState(false);
const[showTransaction,setShowTransaction]=useState(false);


const[modalmessage,setmodalmessage]=useState(null);

const[searchtext,setsearchtext]=useState(null);
const [selectedValue, setSelectedValue] = useState("Block");

const handleChange=(event)=> {
    event.preventDefault();
    setShowblock(false);
    setShowTransaction(false);
    setSelectedValue(event.target.value);
}
const handleTextChange=(event)=>{
    event.preventDefault();
    setShowblock(false);
    setShowTransaction(false);
    setsearchtext(event.target.value);
}

useEffect(() => {
    if (!showBlock) {
        setLoadingblockind(false);
    }
    else
    setLoadingblockind(true);
}, [showBlock]);


useEffect(() => {
    if (!showTransaction) {
        setLoadingtransactionind(false);
    }
    else
    setLoadingtransactionind(true);
}, [showTransaction]);

const handleSearch=(event)=>{
    event.preventDefault();
       setShowblock(false);
    //first search the block
    if(selectedValue==="Block" && searchtext!=null){
        setShowblock(true);
        fetchsingleblock(searchtext);       
    }
    else if(selectedValue==="Transaction" && searchtext!=null){
    //then search the transaction
    setShowTransaction(true);
    fetchsingletransaction(searchtext);
    }
    else
    {
    fetchlatestblock();

    }

   
}

const fetchsingletransaction=(id)=>{
 const url=baseurl+"rawtx/"+id;
 axios.get(proxyurl + url)
 .then((res) => {
     if(res.data){
        setTransactionBlockdata(res.data);
        setTransactionBlockdataKeys(Object.keys(res.data));
        setLoadingtransactionind(false);
     return true;
     }
 })
 .catch((error)=>{
     setmodalmessage("Error:Invalid HashCode");
 });
};

	
	const fetchlatestblock = () => {
		const url = baseurl+"latestblock";
		axios.get(proxyurl + url).then((res) => {
			setLatestblockdata(res.data);
		//	sethashcode(res.data.hash);
            fetchsingleblock(res.data.hash);
            setLoadinglatestblockind(false);
		});
	};

	const fetchsingleblock = (hashcode) => {
		const url = baseurl+"rawblock/" + hashcode;
        axios.get(proxyurl + url)
        .then((res) => {
            if(res.data){
                
			setBlockdata(res.data);
            setBlockdataKeys(Object.keys(res.data));
            setLoadingblockind(false);
            return true;
            }
        })
        .catch((error)=>{
            setmodalmessage("Error:"+error);
            setOpenAlert(true);
        });
	};

	useEffect(() => {
		fetchlatestblock();
    },[latestblockdata]);
    


	return (
		<Container maxWidth="xl">
            {openAlert && 
            	<AlertMessage  MessageText={modalmessage} OnCloseWindow={handleAlertClose}/>
            }
			<div style={{ display: "flex", alignItems: "center" }}>
				<InputBase
					placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleTextChange}
                   style={{width:"70%"}}
				/>
				<IconButton type="submit" aria-label="search" onClick={(event)=>handleSearch(event)} size="medium">
					<SearchIcon />
				</IconButton>

				<RadioGroup
					row
					aria-label="searchtype"
					name="searchtype"
					value={selectedValue}
					onChange={handleChange}>
					<FormControlLabel value="Block" control={<Radio />} label="Block" />
					<FormControlLabel
						value="Transaction"
						control={<Radio />}
						label="Transaction"
					/>
                   
				</RadioGroup>
			</div>
            {
                loadinglatestblockind ? 
                    <CircularProgress
                        variant="indeterminate"
                        disableShrink
                        size={24}
                        thickness={4}
                    />
                :<LatestBlockInfo data={latestblockdata} />
                
            }
		
			{showBlock && (loadingblockind ?
				<CircularProgress
					variant="indeterminate"
					disableShrink
					size={24}
					thickness={4}
				/>
           :<> <br/><BlockInfo data={blockdata} keys={blockdatakeys} /></>)
			}
            {showTransaction && (loadingtransactionind?
            	<CircularProgress
                variant="indeterminate"
                disableShrink
                size={24}
                thickness={4}
            />
            :<> <br/><TransactionInfo data={transactionblockdata} keys={transactionblockdatakeys}/></>

            )}
		</Container>
	);
};
