import React,{useState,useContext,createContext} from 'react'
import { useReducer } from 'react'
import appReducer from './appReducer'

const initialState = {
    transaction:[]
}

// create
export const GlobalContext = React.createContext(initialState)  

//provide
const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(appReducer,initialState)

    function delete_Transaction (id){
        dispatch({
            type: "delete_Transaction",
            payload: id
        })

    }

    function add_Transaction (transaction){
        dispatch({
            type: "add_Transaction",
            payload: transaction
        })

    }

    return (
        <GlobalContext.Provider value={{
            transaction : state.transaction,add_Transaction,delete_Transaction
        }}>     
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
