import React, { useEffect, useState } from "react";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { fetchdata, exerciseOptions } from '../utils/FetchData';
import HorizontalScrollBar from "./HorizontalScrollBar";


const SearchExercise = ({setExercises,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState('');
    
    const [BodyParts,setBodyParts]=useState([]);
    useEffect(()=>{
        const fetchexercisedata=async()=>{
            const bodyPartsData=await fetchdata
            ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all',...bodyPartsData]);
        }
        fetchexercisedata();
    },[])
    const handleSearch = async () => {
        if (search) {
            try {
                let url = 'https://exercisedb.p.rapidapi.com/exercises';
                const searchTerm = search.toLowerCase();
                const exerciseData = await fetchdata(url, exerciseOptions);
                if (!exerciseData) {
                    console.error('No exercise data returned from the API.');
                    return;
                }
                const searchedExercises = exerciseData.filter(
                    (item) =>
                        item.name.toLowerCase().includes(searchTerm) ||
                        item.target.toLowerCase().includes(searchTerm) ||
                        item.equipment.toLowerCase().includes(searchTerm) ||
                        item.bodyPart.toLowerCase().includes(searchTerm)
                );
    
                setSearch('');
                setExercises(searchedExercises);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }
    };
    
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{ input: { fontWeight: '700',
                         border: 'none', 
                         borderRadius: '4px' }, 
                         width: { lg: '800px', xs: '350px' }, 
                         backgroundColor: '#fff', 
                         borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" 
                sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', 
                width: { lg: '173px', xs: '80px' }, 
                height: '56px', position: 'absolute', right: '0px', 
                fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >
                    Search
                </Button>
            </Box>
           <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                    <HorizontalScrollBar data={BodyParts}
                    bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts
                    />
           </Box>
            

        </Stack>
    );
}

export default SearchExercise;
