import React from 'react';
import useFetch from '../Customhook/useFetch';
//https://jsonplaceholder.typicode.com/todos/1
const Hook=()=>{

    const data=useFetch("https://jsonplaceholder.typicode.com/posts");
   
    return(
        <>
        {
            data.map((i,v)=>{
                return(
                    <>
                    <h4 key={data.id}></h4>
                    <p>
                        {data.id} 
                        <br></br>
                        {data.name}

                    </p>
                    </>
                )
            })
        }
        </>
    )
}
export default Hook;