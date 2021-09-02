import { v4 } from "uuid";
// import { checkItem } from "../components/VideoDetails";


export const ADD_TO_HISTORY="ADD_TO_HISTORY"
export const ADD_TO_LIKED_LIBRARY="ADD_TO_LIKED_LIBRARY"
export const REMOVE_FROM_LIBRARY="REMOVE_FROM_LIBRARY"
export const SAVE_VIDEO="SAVE_VIDEO"
export const UNSAVE_VIDEO="UNSAVE_VIDEO"

export const dataReducer =( state, {type,video,_id,playListName,currVid,payload})=>{

    const {history,library}=state;
    
   
    // console.log(currVid._id)
    switch(type){
        case "SET_LOADING":
            return {
                ...state,isLoading:payload
            }
        case "SET_VIDEOS":
            return{
                ...state,videoData:payload
            }
        case "SET_USER":
            return{
                ...state,
                user:  payload.user===undefined?{}:payload.user,
                isAuthenticated:true,
                history:   payload.user?.history[0]?.videos===undefined?[]:payload.user?.history[0].videos,
                library:{...library,
                    liked:   payload.user?.likedVideos[0]?.videos===undefined?[]:payload.user?.likedVideos[0].videos,
                    saved:   payload.user?.savedVideos[0]?.videos===undefined?[]:payload.user?.savedVideos[0].videos,
                    playlist:   payload.user?.playLists[0]?.playLists===undefined?[]:payload.user?.playLists[0]?.playLists
                }
            }
        case "LOGIN_USER":
            localStorage.setItem("token",payload.token)
            localStorage.setItem("isAuthenticated",true)
            return{
                ...state,
                user:  payload.user===undefined?{}:payload.user,
                isAuthenticated:true,
                history:   payload.user?.history[0]?.videos===undefined?[]:payload.user?.history[0].videos,
                library:{...library,
                    liked:   payload.user?.likedVideos[0]?.videos===undefined?[]:payload.user?.likedVideos[0].videos,
                    saved:   payload.user?.savedVideos[0]?.videos===undefined?[]:payload.user?.savedVideos[0].videos,
                    playlist:   payload.user?.playLists[0]?.playLists===undefined?[]:payload.user?.playLists[0]?.playLists
                }
            }

        case "LOGOUT_USER":
            localStorage.removeItem("token")
            localStorage.removeItem("isAuthenticated")
            return{
                ...state,
                user:{},
                isAuthenticated:false,
                history:[],
                library:{...library,
                    liked:[],
                    saved:[],
                    playlist:[]
                }
            }   
        case "REGISTER_USER":
            localStorage.setItem("token",payload.token)
            localStorage.setItem("isAuthenticated",true)
            return{
                ...state,
                isAuthenticated:true,
                user:payload.savedUser
            }
        case ADD_TO_HISTORY:
            return{
                ...state,
                history:payload.data.videos?.videos,
                currVideo:payload.video
            }
        case "ADD_TO_LIKED_VIDEOS":
            return{
                ...state,
                library:{...library ,
                    liked:payload?.videos?.videos},
                    toastMessage:"Added to liked videos"
            }
        case "REMOVE_FROM_LIKED_VIDEOS":
            return{
                ...state,
                library:{...library,
                    liked:payload?.videos?.videos},
                    toastMessage:"Removed from liked videos"
            }
        case "ADD_TO_SAVED_VIDEOS":
            return{
                ...state,
                library:{...library ,
                    saved:payload?.videos?.videos},
                    toastMessage:"Added to saved videos"
            }
        case "REMOVE_FROM_SAVED_VIDEOS":
            return{
                ...state,
                library:{...library,
                    saved:payload?.videos?.videos},
                    toastMessage:"Removed from saved videos"
            }
        case "ADD_PLAYLIST":
            return{
                ...state,
                library:{
                    ...library,
                    playlist:payload?.playList?.playLists
                },
                toastMessage:"Created playlist"
            }
        case "ADD_VIDEO_TO_PLAYLIST":
            return{
                ...state,
                library:{
                    ...library,
                    playlist:payload?.playList?.playLists
                },
                toastMessage:"Video added to playlist"
            }
        // case "ADD_PLAYLIST":
        //     return{
        //         ...state,library:{...library,playlist:library.playlist.concat({_id:v4(),name:playListName,videos:[]})},toastMessage:"Created playlist"
        //     }
        case "REMOVE_PLAYLIST":
            return{
                ...state,
                library:{
                    ...library,
                    playlist:payload?.playList?.playLists
                },
                toastMessage:"Playlist deleted"
            }    
        // case "ADD_TO_PLAYLIST":
        //     // console.log(currVid)
        //     let index1 = state.library.playlist.findIndex(item=>item._id===_id)
        //     console.log(index1)
        //     return {...state,
        //         library:{
        //             ...library,playlist:library.playlist.map(
        //                 (item)=>{
        //                     if(item._id===_id){
        //                         return{...item,videos:[...item.videos,currVid]}
        //                     }
        //                     return item
        //                 }
        //                 )
        //                 },toastMessage:`Added to ${library.playlist[index1].name}`}
        case "REMOVE_VIDEO_FROM_PLAYLIST":
            return{
                ...state,
                library:{
                    ...library,
                    playlist:payload?.playList?.playLists
                },
                toastMessage:"video removed from playlist"
            }
        default:
            console.log("error")
            return state;
    }
}
