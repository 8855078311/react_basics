import React, { useCallback,useState } from 'react';
import PrintTable from './Printable';

const TestNewNew=()=>{
    const[number,setNumber]=useState(1);
    const[darkTheme,setDarkTheme]=useState(false);

    const calculateTable=useCallback((value)=>{
        let newNumber=number+value;
        return [number *1 ,number*2,number*3,number*4,number*5];
    })
    const cssStyle={
        backgroundColor:darkTheme?"back":"white",
        color:darkTheme? "white":"black",
    }
    return(
        <>
        <div style={cssStyle}>
            <input onChange={(e)=>setNumber(e.target.valueAsNumber)} 
            type='number' value={number} />
           <PrintTable calculateTable={calculateTable}/>
            <button onClick={()=>setDarkTheme(!darkTheme)}>Toggle</button>
        </div>
        </>
    )
}
export default TestNewNew;