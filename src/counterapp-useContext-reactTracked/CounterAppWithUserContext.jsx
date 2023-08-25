import React, { createContext, useContext, useReducer } from "react";

const initialState = {
    count1: 0,
    count2: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                [action.name]: state[action.name] + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                [action.name]: state[action.name] - 1,
            };
        default:
            state;
    }
};

const useValue = () => useReducer(reducer, initialState);

const Context = createContext(null);

const useGlobalState = () => {
    const value = useContext(Context);
    if (value == null)
        throw new Error("Please add GlobalStateProvider");
    return value;
}

const GlobalStateProvider = ({children}) => (
    <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({name}) => {
    const [state, updateState] = useGlobalState();
    return(
        <div>
            {state[name]}
            <button onClick={()=> updateState({type:'INCREMENT', name})}>+1</button>
            <button onClick={()=> updateState({type:'DECREMENT', name})}>-1</button>
        </div>
    );
};

const CounterAppWithContext = () => (
    <GlobalStateProvider>
        <h1>Count1</h1>
        <Counter name={"count1"}/>
        <Counter name={"count1"}/>
    </GlobalStateProvider>
);

export default CounterAppWithContext