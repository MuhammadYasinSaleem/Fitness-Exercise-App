import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata, exerciseOptions } from "../utils/FetchData";

const Exercise = () => {
  const { name } = useParams();
  const [exerciseData, setExerciseData] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const data = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`,
          exerciseOptions
        );
        setExerciseData(data[0]); // Assuming data is an array
        console.log(data[0]); // Log the first item to check structure
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };

    fetchExerciseData();
  }, [name]);

  return (
    <div>
      <h1>Exercise: {name}</h1>
      {exerciseData ? (
        <div>
          <img src={exerciseData.gifUrl} alt={exerciseData.name} style={{ width: '300px', height: '300px', margin: '10px' }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exercise;
