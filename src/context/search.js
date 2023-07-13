
import {useState,useContext,createContext} from 'react'

const SearchContex =createContext();

const SearchProvider =({children})=>{


    const [search,setSearch] =useState({
       keyword:"",
       results:[],
        });
      //default axios
   


// eslint-disable-next-line

      
        return (
            <SearchContex.Provider value={[search,setSearch]}>
             {children}
            </SearchContex.Provider>
        )

}

const useSearch =()=>useContext(SearchContex)

export {useSearch,SearchProvider}


