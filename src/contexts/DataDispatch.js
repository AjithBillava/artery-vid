import { createContext } from "react";
import { DataReducer } from "../reducers/DataReducer";
import {useReducer,useContext} from "react";

export const dataList = {
    history:[],
    library:{
        liked:[],
        saved:[],
        playlist:[
            {
                _id:"default",
                name:"default",
                videos:[],
                
            }
        ]
    },
    currVideo:[]
}

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [{history,library,currVideo}, dispatch] = useReducer(DataReducer, dataList)

    return(
        <DataContext.Provider 
        value={{
            history,
            library,
            // playlist,
            currVideo,
            dataDispatch:dispatch
        }}>
        {children}
    </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)