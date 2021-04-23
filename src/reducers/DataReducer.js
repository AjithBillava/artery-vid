import { v4 } from "uuid";
import { checkItem } from "../components/Playlist";


export const ADD_TO_HISTORY="ADD_TO_HISTORY"
export const ADD_TO_LIKED_LIBRARY="ADD_TO_LIKED_LIBRARY"
export const REMOVE_FROM_LIBRARY="REMOVE_FROM_LIBRARY"
export const SAVE_VIDEO="SAVE_VIDEO"
export const UNSAVE_VIDEO="UNSAVE_VIDEO"

export const DataReducer =( state, {type,video,id,playListName,currVid})=>{

    const {history,library}=state;
    // console.log(history,library)
    // console.log(video)
    // const playList = Object.keys(state.library.playList)

    // const idd=video.id;
    // console.log(idd)
    console.log(state.library.playlist.videos)
    // console.log(playListName)
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
                ...state,library:{...library ,liked:library.liked.filter((item)=>item.id!==id)}
            }
        case SAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.concat(video)}
            }
        case UNSAVE_VIDEO:
            return{
                ...state,library:{...library ,saved:library.saved.filter((item)=>item.id!==id)}
            }
        case "ADD_PLAYLIST":
            return{
                ...state,library:{...library,playlist:library.playlist.concat({id:v4(),name:playListName,videos:[],selectPlaylist:false})}
            }
        case "ADD_TO_PLAYLIST":
            console.log(currVid)
            return{
                ...state,library:{...library,
                    playlist:library.playlist.map((item)=>
                    (
                        item.id===id && !checkItem(item.videos,currVid.id) ?{...item,videos:item.videos.concat(currVid),selectPlaylist:!item.selectPlaylist}:{...item,videos:item.videos.filter(vid=>vid.id===id),selectPlaylist:!item.selectPlaylist}
                    )) }
            }
        // case "CURRENT_VID":
        //     return{
        //         ...state,currVideo:video
        //     }
        default:
            console.log("error")
            return state;
    }
}