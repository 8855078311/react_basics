import React,{useEffect, useState,useRef} from "react";

const Application=()=>{
    const[name,setName]=useState("");

    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
        // setName(e.target.value);
    });
    return(
        <>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
        <h2>Name:{name}</h2>
        <h2>Renders:{count.current}</h2>
        </>
    )
}
export default Application;