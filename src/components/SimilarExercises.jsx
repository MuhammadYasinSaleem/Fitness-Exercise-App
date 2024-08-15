import React from "react";
import { Box,Stack,Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from "./Loader";
const SimilarExercises=({targetMuscleExercise,equipmentExercise})=>{
    return(
        <Box sx={{mt:{lg:'100px',xs:'0'}}}>
            <Typography variant="h3" mb={5}>
            Exercises that target the same Muscle group
            </Typography>
            <Stack direction="row" sx={{p:'2',position:'relative' }}>
            {targetMuscleExercise.length ? <HorizontalScrollBar data={targetMuscleExercise}/>:
            <Loader/>}
            </Stack>

            <Typography variant="h3" mb={5}>
            Exercises that target the same Equipment
            </Typography>
            <Stack direction="row" sx={{p:'2',position:'relative' }}>
            {equipmentExercise.length ? <HorizontalScrollBar data={equipmentExercise}/>:
            <Loader/>}
            </Stack>
        </Box>
    )
}

export default SimilarExercises