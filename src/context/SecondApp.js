import React,{useContext} from 'react';
import { LoginContext } from './LoginContextProvider';
const SecondApp=()=>{

    const login=useContext(LoginContext);
    console.log(login);
    return(
        <>
        <h1>Second App</h1>
        </>
    )
}
export default SecondApp;