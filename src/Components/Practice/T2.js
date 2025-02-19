import React, { useState,createContext } from 'react';  
import T1 from './T1';

export const LoginContext=createContext();

const T2=()=>{

    const [login, setLogin] = useState(false); // example state  

    return (  
        <LoginContext.Provider value={true}>  
           <div>
            <T1/>
           </div>
        </LoginContext.Provider>  
    );  
}
export default T2;