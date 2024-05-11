import React, { useState } from "react";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { fetchdata, exerciseOptions } from '../utils/FetchData';

const SearchExercise = () => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if (search) {
            try {
                const exercisedata = await fetchdata(`https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/muscle/${search}`, exerciseOptions);
              exercisedata.forEach(exercise => {
                    console.log(exercise.primaryMuscles);
                });
                console.log(exercisedata);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

export default SearchExercise;
