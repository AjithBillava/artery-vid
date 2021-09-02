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
                playListName:"default",
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
            console.log(error.response)
        }
    }
    const loginUser = async(email,password,state,navigate) =>{
        try {
            const {data} =await axios.post(`${REACT_APP_BACKEND_URL}/user/login`,{email,password})
            console.log(data)
            dataDispatch({type:"LOGIN_USER",payload:data})
            navigate(state?.from?state.from:"/")

        } catch (error) {
            console.log(error.response)
        }
    }
    const logoutUser = ()=>{
        try{
          dataDispatch({type:"LOGOUT_USER"}) 
        }catch(error){
          console.error(error.response);
        }
      }
    
    const registerUser =async (firstname,lastname,email,password,state,navigate) =>{
        try {
            const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/register`,{firstname,lastname,email,password})
            
            dataDispatch({type:"REGISTER_USER",payload:data})
            navigate(state?.from?state.from:"/")

        } catch (error) {
            console.log(error.response)
        }
    }

    const addToHistory = async (userId,videoId,video) =>{
        try {
            dataDispatch({type:"SET_LOADING",payload:true})

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/history`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"ADD_TO_HISTORY",payload:{data,video}})
            dataDispatch({type:"SET_LOADING",payload:false})

        } catch (error) {
            console.log(error.response)
        }
    }
    const removeFromHistory = async (userId,videoId,video) =>{
        try {
            dataDispatch({type:"SET_LOADING",payload:true})

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/history/remove`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"ADD_TO_HISTORY",payload:{data,video}})
            dataDispatch({type:"SET_LOADING",payload:false})

        } catch (error) {
            console.log(error.response)
        }
    }
    const addToLikedVideos = async (userId,videoId) =>{
        try {

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/likedVideos`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"ADD_TO_LIKED_VIDEOS",payload:data})

        } catch (error) {
            console.log(error.response)
        }
    }
    const removeFromLikedVideos = async (userId,videoId) =>{
        try {

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/likedVideos/${videoId}/remove`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"REMOVE_FROM_LIKED_VIDEOS",payload:data})

        } catch (error) {
            console.log(error.response)
        }
    }
    const addToSavedVideos = async (userId,videoId) =>{
        try {

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/savedVideos`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"ADD_TO_SAVED_VIDEOS",payload:data})

        } catch (error) {
            console.log(error.response)
        }
    }
    const removeFromSavedVideos = async (userId,videoId) =>{
        try {

            const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/savedVideos/${videoId}/remove`,{videoId},TokenConfig())
            console.log(data)

            dataDispatch({type:"REMOVE_FROM_SAVED_VIDEOS",payload:data})

        } catch (error) {
            console.log(error.response)
        }
    }

    const addPlaylist =async(userId,playListName)=>{
        try {
            const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/playlists`,{playListName},TokenConfig())
            dataDispatch({type:"ADD_PLAYLIST",payload:data})
            
        } catch (error) {
            console.log(error)
        }
    }
    const addVideoToPlaylist =async(userId,playListName,playListId,videoId)=>{
        try {
            const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/playlists/${playListId}`,{playListName,videoId},TokenConfig())
            dataDispatch({type:"ADD_VIDEO_TO_PLAYLIST",payload:data})
            
        } catch (error) {
            console.log(error)
        }
    }
    const removePlaylist =async(userId,playListId)=>{
        try {
            dataDispatch({type:"SET_LOADING",payload:true})
            const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/playlists/${playListId}/remove`,{playListId},TokenConfig())
            dataDispatch({type:"REMOVE_PLAYLIST",payload:data})
            dataDispatch({type:"SET_LOADING",payload:false})

        } catch (error) {
            console.log(error)
        }
    }
    const removeVideoFromPlaylist =async(userId,playListId,videoId)=>{
        try {
            const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/playlists/${playListId}/${videoId}/remove`,{playListId,videoId},TokenConfig())
            dataDispatch({type:"REMOVE_VIDEO_FROM_PLAYLIST",payload:data})

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
            logoutUser,
            registerUser,
            addToHistory,
            addToLikedVideos,
            addToSavedVideos,
            addPlaylist,
            addVideoToPlaylist,
            removeFromLikedVideos,
            removeFromHistory,
            removeFromSavedVideos,
            removePlaylist,
            removeVideoFromPlaylist,
            dataDispatch
        }}>
        {children}
    </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)