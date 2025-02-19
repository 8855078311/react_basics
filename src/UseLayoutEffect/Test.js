import React, { useLayoutEffect,useState ,useEffect,useRef} from 'react';

const Test=()=>{
    const[toggle,setToggle]=useState(false);
    const textRef=useRef();

    useEffect(()=>{
        if(textRef.current !=null){
            const dimention=textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop=`${dimention.height}px`
        }
    })
    useLayoutEffect=(()=>{
        console.log("useLayoutEffect");
    },[toggle]);
    return(
        <>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h2>code bless you...</h2>}
        </>
    )
}
export default Test;