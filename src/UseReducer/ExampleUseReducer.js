import React,{useReducer} from 'react';

const ACTION={
    INCREASE:"increase",
    DECREASE:"decrease"
}
const initialSate={count:0};


const reducer=(state,action)=>{
    switch(action.type){
        case ACTION.INCREASE:
            return{count:state.count+1};

        case ACTION.DECREASE:
            return{count:state.count-1};

            default:
                return state;
    }
};
const ExampleUseReducer=()=>{
    const[state,dispatch]=useReducer(reducer,initialSate);
    
    const increaseCount=()=>{
        dispatch({type:ACTION.INCREASE});
    }

    const decreaseCount=()=>{
        dispatch({type:ACTION.DECREASE});
    }
    return(
        <>
        <h2>{state.count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <br>
        </br>
        <button className='my-4' onClick={decreaseCount}>Decrease</button>
        </>
    )
}
export default ExampleUseReducer;