import React, {createContext,useContext,useEffect,useState} from 'react';


const ResultContext = createContext()


const baseUrl = 'https://api.coingecko.com/api/v3/search/trending'

export const ResultContexProvider =({children})=>{
    const [results,setResults] =useState([])
    

    const getResults=async ()=>{
        const url = `${baseUrl}`;
        const response = await fetch(url)
        const resultsData = await response.json()
        setResults(resultsData.coins)
    }
    useEffect(()=>{
        getResults()

    },[])
    return (
        <ResultContext.Provider value={{results}}>
            {children}
        </ResultContext.Provider>
    )
}
export const useResultContext = ()=> useContext(ResultContext)