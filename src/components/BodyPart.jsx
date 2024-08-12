import React from "react";
import { Stack,Typography } from "@mui/material";
import icon from '../assests/icons/gym.png'
const BodyPart=({item,BodyPart,setBodyPart})=>{
    return(
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: BodyPart===item?'4px solid #ff2625':'',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'47px'
    }}
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    >
        <img src={icon} alt='dumbell' style={{width:'40px',height:'40px'}} />
        <Typography
        fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize"
        >{
            item
        }</Typography>
    </Stack>
    )
}

export default BodyPart