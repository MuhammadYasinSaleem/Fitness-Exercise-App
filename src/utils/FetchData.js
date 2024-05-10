export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.React_App_Rapid_Api_key,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };

export const fetchdata=async(url,options)=>{
const response=await fetch(url,options);
const data=await response.json();
return data;
}