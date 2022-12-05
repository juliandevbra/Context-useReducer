import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { apiSwitch } from "../apiSwitch";
const GlobalStates = createContext()

const initialState = {
    url: 'https://dog.ceo/api/breed/hound/images/random/10',
    api: 'dog'
}

const Context = ({children}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(apiSwitch, initialState)
    
    useEffect(() => {
        axios(state.url)
        .then(res => setData(res.data))
    }, [state])


    return (
        <GlobalStates.Provider 
            value={{data, loading, setLoading, state, dispatch}}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}