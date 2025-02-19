import React, { useState,useEffect ,useContext} from 'react'
import Practice from './Practice';
import T2 from './T2';
const T1=()=> {
 
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log('Run useEffect',count);
    },[count]);
    // const[time,setTime]=useState(0);

    // useEffect(()=>{

    //     const timer =setInterval(()=>{
    //         setTime(time+1);
    //     },1000);
    //     return()=>{
    //         clearInterval(timer);
    //     }
    // });

    return (
        <>
        <h3>Count {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <T2>
        <Practice/>
        </T2>
        </>
        
    )
}

export default T1;
