import React, { useEffect, useState,useContext } from "react";  
import { LoginContext } from "./T2";
const Practice = () => {  

    const loginnew=useContext(LoginContext);
    console.log(loginnew);


    const [newname, setNewName] = useState(" ");  
    const[count,setCount]=useState(0);
    const[otherCount,setOtherCount]=useState(5);

//using 2 variable 
    // const[details,setDetails]=useState({counter:0, name:""});

// function increase(){
//     setDetails((prev)=>({

//         ...prev,
//         counter:prev.counter+1,   
//     }))
  
// const onChange=(e)=>{
//     e.preventDefault();
//     setNewName(e.target.value);

// }
//     console.log(details);
//     console.log(newname);
// }
useEffect(()=>{
    document.title=`${otherCount} new messages!`;
},[otherCount])
    return (  
        <div>  
            {/* <input type='text' name={newname} value={newname} onChange={(e)=>e.target.value}/>
            
            <br></br>
            <span>{details.counter} this is name{details.name}</span>
             <button onClick={increase}>Increase</button> */}

        <br></br>
        {count}
             <button onClick={()=>setCount(count+1)}>Increase new</button>



        </div>  
    );  
} 
export default Practice;
