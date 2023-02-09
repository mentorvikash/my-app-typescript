import React from 'react'
import { useReducer } from 'react'

type statType = {
    count: number
}

type changeType = {
    type: "increment" | "decrement"
    payload: number
}

type reset = {
    type: "reset"
}

type actionType = changeType | reset

const initialState = {
    count: 0,
}

const reducer = (state: statType, action: actionType) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function DiscimenatedUnion() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })} >Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}

export default DiscimenatedUnion