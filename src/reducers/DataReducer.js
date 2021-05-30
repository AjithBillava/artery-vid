import { v4 } from "uuid";
// import { checkItem } from "../components/VideoDetails";


export const ADD_TO_HISTORY="ADD_TO_HISTORY"
export const ADD_TO_LIKED_LIBRARY="ADD_TO_LIKED_LIBRARY"
export const REMOVE_FROM_LIBRARY="REMOVE_FROM_LIBRARY"
export const SAVE_VIDEO="SAVE_VIDEO"
export const UNSAVE_VIDEO="UNSAVE_VIDEO"

export const DataReducer =( state, {type,video,_id,playListName,currVid})=>{

    const {history,library}=state;
    
   
    // console.log(currVid._id)
    switch(type){
        case ADD_TO_HISTORY:
            return{
                ...state,history:history.concat(video),
                currVideo:video
            }
        case ADD_TO_LIKED_LIBRARY:
            return{
                ...state,library:{...library ,liked:library.liked.concat(video)},toastMessage:"Added to liked videos"
            }
        case REMOVE_FROM_LIBRARY:
            return{
                ...state,library:{...library ,liked:library.liked.filter((item)=>item._id!==_id)},toastMessage:"Removed from liked videos"
            }
        case SAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.concat(video)},toastMessage:"Added to saved videos"
            }
        case UNSAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.filter((item)=>item._id!==_id)},toastMessage:"Removed from saved videos"
            }
        case "ADD_PLAYLIST":
            return{
                ...state,library:{...library,playlist:library.playlist.concat({_id:v4(),name:playListName,videos:[]})},toastMessage:"Created playlist"
            }
        case "REMOVE_PLAYLIST":
            console.log(_id)
            return{
                ...state,library:{...library ,playlist:library.playlist.filter((item)=>item._id!==_id)},toastMessage:"Deleted playlist"
            }    
        case "ADD_TO_PLAYLIST":
            // console.log(currVid)
            let index1 = state.library.playlist.findIndex(item=>item._id===_id)
            console.log(index1)
            return {...state,
                library:{
                    ...library,playlist:library.playlist.map(
                        (item)=>{
                            if(item._id===_id){
                                return{...item,videos:[...item.videos,currVid]}
                            }
                            return item
                        }
                        )
                        },toastMessage:`Added to ${library.playlist[index1].name}`}
        case "REMOVE_FROM_PLAYLIST":
            const index = state.library.playlist.findIndex(item=>item._id===_id)
            return {...state,
                library:{
                    ...library,playlist:library.playlist.map(
                        (item)=>{
                            if(item._id===_id){
                                return {...item,videos:item.videos.filter(vid=>vid._id!==currVid._id)}
                            }
                            return item;
                        })
                
                },toastMessage:`Removed from ${library.playlist[index].name}`}
        
        default:
            console.log("error")
            return state;
    }
}
