import React,{useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions,fetchdata,youtubeoptions } from "../utils/FetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail=()=>{
  const {id}=useParams()
  const [exerciseDetail,setexerciseDetail]=useState({});
  const [exerciseVideos,setexerciseVideos]=useState([]);
  const [targetMuscleExercise,settargetMuscleExercise]=useState([]);
  const [equipmentExercise,setequipmentExercise]=useState([]);

  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      const exercisedbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      const ExerciseDetailData=await fetchdata(`${exercisedbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setexerciseDetail(ExerciseDetailData);
      const exerciseVideosData = await fetchdata(`${youtubeSearchUrl}/search?query=${ExerciseDetailData.name}`, youtubeoptions);
      setexerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData=await fetchdata(`${exercisedbUrl}/exercises/target/${ExerciseDetailData.target}`,exerciseOptions);
      settargetMuscleExercise(targetMuscleExerciseData);
      const equipmentExerciseData=await fetchdata(`${exercisedbUrl}/exercises/equipment/${ExerciseDetailData.equipment}`,exerciseOptions);
      setequipmentExercise(equipmentExerciseData);

      
    }
    fetchExerciseData();
  },[id])

  
  return(
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} 
      equipmentExercise={equipmentExercise} />
    </Box>
  )
}

export default ExerciseDetail