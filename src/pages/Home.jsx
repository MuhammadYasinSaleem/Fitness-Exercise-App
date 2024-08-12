import React, { useState } from "react";
import {Box} from "@mui/material"
import Herobanner from "../components/Herobanner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";
const Home=()=>{
    const [bodyPart,setBodyPart]=useState('all')
    const [exercises,setExercises]=useState([]);
    return(
        <Box>
            <Herobanner/>
            <SearchExercise
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercise  setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}/>
        </Box>
    )
}

export default Home;