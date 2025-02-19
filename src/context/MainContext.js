import React from 'react';
import LoginContextProvider from './LoginContextProvider';
import SecondApp from './SecondApp';
const MainContext=()=>{
    return(
        <>
        <LoginContextProvider>
           <SecondApp/>
        </LoginContextProvider>
        </>
    )
}
export default MainContext;