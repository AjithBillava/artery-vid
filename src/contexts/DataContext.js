import { createContext } from "react";
import { dataReducer } from "../reducers/DataReducer";
import {useReducer,useContext} from "react";
import axios from "axios";
const {REACT_APP_BACKEND_URL} = process.env

export const dataList = {
    videoData:[],
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
    user:{},
    currVideo:[],
    toastMessage:"",
    isAuthenticated: false,
    isLoading:false,
}

export const DataContext = createContext();

export const TokenConfig = () => {
	const token = localStorage.getItem("token");

	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
};

export const DataProvider = ({children}) =>{
    const [state, dataDispatch] = useReducer(dataReducer, dataList)

    const loadData = async() =>{
        try {
            dataDispatch({type:"SET_LOADING",payload:true})
            const {data : videoData} = await axios.get(`${REACT_APP_BACKEND_URL}/videos`)
            console.log(videoData)
            dataDispatch({type:"SET_VIDEOS",payload:videoData.videos})
            dataDispatch({type:"SET_LOADING",payload:false})
        } catch (error) {
            console.log(error.response)
        }
    }
    const loadUser = async()=>{
        try {
            dataDispatch({type:"SET_LOADING",payload:true})
            const {data} =await axios.get(`${REACT_APP_BACKEND_URL}/user`,TokenConfig())

            dataDispatch({type:"SET_USER",payload:data})
            console.log(data)
            dataDispatch({type:"SET_LOADING",payload:false})
            
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async(email,password,state,navigate) =>{
        try {
            const {data} =await axios.post(`${REACT_APP_BACKEND_URL}/user/login`,{email,password})
            console.log(data)
            dataDispatch({type:"LOGIN_USER",payload:data})
            navigate(state?.from?state.from:"/")

        } catch (error) {
            console.log(error)
        }
    }
    return(
        <DataContext.Provider 
        value={{
            state,
            loadData,
            loadUser,
            loginUser,
            dataDispatch
        }}>
        {children}
    </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)