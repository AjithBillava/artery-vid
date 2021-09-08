import { useState } from "react"
import { useData } from "../contexts/DataContext"
import { checkItem } from "../utils/CheckItem";
import { CreateNewPlaylist } from "./CreateNewPlayList";



export const AddToPlaylist = ( {show,setShow } ) =>{
    const [showPlaylist,setShowPlaylist] = useState(false);

    const {state:{library,currVideo,user},addVideoToPlaylist,removeVideoFromPlaylist} = useData()
    const playlist=library.playlist;
    const userId = user._id

    return(
        
        <div className="playlist center">
           <div className="modal-contents md-width-card add-to-playlist relative-box" >
           <button className="dismiss-btn top-right" onClick={()=>setShow(!show)}>x</button>
               <div className="space-between border-bottom relative-box">
                   Add to...
                  
               </div>
               
               <div className="border-bottom">
               {
                   playlist?.map((item)=>(
                           <label key={item._id} htmlFor={item._id} className="space-between align-center " >
                                <input type="checkbox" 
                                onClick={()=>{
                                    if(!checkItem(item.videos,currVideo._id)){
                                        addVideoToPlaylist(userId,item.name,item._id,currVideo._id) 
                                    }
                                    else{
                                        removeVideoFromPlaylist(userId,item._id,currVideo._id) 
                                    }}}
                                _id={item._id}
                                checked={checkItem(item.videos,currVideo._id)} 
                            ></input>
                           {item.playListName}
                            </label>
                       
                   ))
               }
               </div>
               {!showPlaylist && <div onClick={()=>setShowPlaylist(!showPlaylist)} style={{cursor:"pointer"}} className="space-between">
                   <div>+</div>
                   <div>Create new playlist</div>
               </div>}
               {showPlaylist && <CreateNewPlaylist showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} />}

           </div>
        </div>
    )
}