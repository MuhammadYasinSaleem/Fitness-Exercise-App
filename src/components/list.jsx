import React from "react";
import { Stack,Typography } from "@mui/material";
import icon from '../assests/icons/gym.png'
import { Link } from "react-router-dom";
const List=(props)=>{
    return(
        
<Stack
type="button"
justifyContent='center'
alignItems='center'
className="bodyPart-card"
sx={{ margin: '20px' }} 
>
<Link to={`/exercise/${props.name}`} style={{textDecoration:"none",textAlign:"center"}}>
    <img src={icon} alt="gym" style={{width:"250px",height:"250px"}} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {props.name}</Typography>
    </Link>
</Stack>
    )
}

export default List