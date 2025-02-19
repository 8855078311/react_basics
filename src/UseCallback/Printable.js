import React,{useState,useEffect} from 'react';
const PrintTable=({calculateTable})=>{
    const[rows,setRows]=useState([]);

    useEffect(()=>{
        console.log("Print Table runs!");
        setRows(calculateTable(2));
    },[calculateTable])

    return rows.map((row,index)=>{
        return <p key={index}>{row}</p>
    })
}
export default PrintTable;