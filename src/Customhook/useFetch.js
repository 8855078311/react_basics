import React,{useState,useEffect} from 'react';
const useFetch=(url)=>{
    const [responses,setResponses]=useState([]);

    const useEffect=(()=>{
        fetch(url)
        .then((response)=>{
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.json();
        }).then((data)=>{
            setResponses(data)
            console.log(data);
        });
    },[url]);
    return responses;

    // return(
    //     <>
    //     </>
    // )
}
export default useFetch;