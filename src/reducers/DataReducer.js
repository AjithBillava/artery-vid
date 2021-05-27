import { v4 } from "uuid";
// import { checkItem } from "../components/VideoDetails";


export const ADD_TO_HISTORY="ADD_TO_HISTORY"
export const ADD_TO_LIKED_LIBRARY="ADD_TO_LIKED_LIBRARY"
export const REMOVE_FROM_LIBRARY="REMOVE_FROM_LIBRARY"
export const SAVE_VIDEO="SAVE_VIDEO"
export const UNSAVE_VIDEO="UNSAVE_VIDEO"

export const DataReducer =( state, {type,video,_id,playListName,currVid})=>{

    const {history,library}=state;
    
    console.log(state.library.playlist.videos)
    // console.log(currVid._id)
    switch(type){
        case ADD_TO_HISTORY:
            return{
                ...state,history:history.concat(video),
                currVideo:video
            }
        case ADD_TO_LIKED_LIBRARY:
            return{
                ...state,library:{...library ,liked:library.liked.concat(video)}
            }
        case REMOVE_FROM_LIBRARY:
            return{
                ...state,library:{...library ,liked:library.liked.filter((item)=>item._id!==_id)}
            }
        case SAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.concat(video)}
            }
        case UNSAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.filter((item)=>item._id!==_id)}
            }
        case "ADD_PLAYLIST":
            return{
                ...state,library:{...library,playlist:library.playlist.concat({_id:v4(),name:playListName,videos:[]})}
            }
        case "REMOVE_PLAYLIST":
            console.log(_id)
            return{
                ...state,library:{...library ,playlist:library.playlist.filter((item)=>item._id!==_id)}
            }    
        case "ADD_TO_PLAYLIST":
            // console.log(currVid)
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
                        }}
        case "REMOVE_FROM_PLAYLIST":
            return {...state,
                library:{
                    ...library,playlist:library.playlist.map(
                        (item)=>{
                            if(item._id===_id){
                                return {...item,videos:item.videos.filter(vid=>vid._id!==currVid._id)}
                            }
                            return item;
                        })
                
                }}
        
        default:
            console.log("error")
            return state;
    }
}
