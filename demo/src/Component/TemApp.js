import React, { useState } from 'react';
import { useEffect } from 'react';
import { WiDaySnowThunderstorm } from "react-icons/wi";

const TemApp = () => {
    const[search,setSearch]=useState("Mumbai");
    const[city,setCity]=useState(null);
   useEffect(()=>{
    const fetchApi= async ()=>{
        try{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e2ee630e511a82c7013746fc9338af33`
        const response =await fetch(url);
        const output = await response.json();
        setCity(output.main);

        }
        catch(error){
            console.log("No data found");
        }
    }
    fetchApi();
   },[search])
  

    return (
        <div  className='bg-blue-300 w-[400px] h-[500px] border rounded flex item-center flex-col items-center mx-auto my-7 gap-4 shadow-xl shadow-cyan-500/50
         ' >
            
                <input type='search' value={search} onChange={(event)=>{setSearch(event.target.value)}} className='border rounded-2xl w-[300px]   text-slate-800 mt-5  py-3 px-4  '></input>

          {
            !city ?(<p className=' mx-auto my-auto  text-2xl font-bold'>No DATA FOUND</p>):(
                <div > 
                    <div className='flex  gap-3 justify-center items-center'>
                        <WiDaySnowThunderstorm className=' text-9xl
                '/>
                     <h1 className='font-bold text-[30px] color italic text-sky-800'>{search}</h1></div>
                    
        
                <div className='flex flex-col gap-4'>
                <h2 className=' font-bold font-sans text-[2rem] text-center'>
                   {city.temp}°Cel
                </h2>
                <h3 className='font-bold text-center font-light text-slate-500 text-[25px] shadow-sm'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
               </div>
               </div>
            )
          }
            
        </div>
    );
}

export default TemApp;
