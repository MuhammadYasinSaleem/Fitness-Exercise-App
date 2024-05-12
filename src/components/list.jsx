import React from "react";
import { Box, Stack,Typography } from "@mui/material";
import icon from '../assests/icons/gym.png'
const List=(props)=>{
    return(
        
<Stack
type="button"
justifyContent='center'
alignItems='center'
className="bodyPart-card"
sx={{ margin: '20px' }} 
>

    <img src={icon} alt="gym" style={{width:"250px",height:"250px"}} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {props.name}</Typography>
    
</Stack>
    )
}

export default List