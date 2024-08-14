import React,{useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions,fetchdata } from "../utils/FetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail=()=>{
  const {id}=useParams()
  const [exerciseDetail,setexerciseDetail]=useState({});
  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      const exercisedbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      const ExerciseDetailData=await fetchdata(`${exercisedbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setexerciseDetail(ExerciseDetailData);
    }
    fetchExerciseData();
  },[id])
  return(
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail