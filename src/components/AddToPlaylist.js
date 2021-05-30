import { useState } from "react"
import { useData } from "../contexts/DataDispatch"
import { checkItem } from "../utils/CheckItem";
import { CreateNewPlaylist } from "./CreateNewPlayList";



export const AddToPlaylist = ( {show,setShow,showToast,setShowToast} ) =>{
    const [showPlaylist,setShowPlaylist] = useState(false);

    const {library,dataDispatch,currVideo} = useData()
    const playlist=library.playlist;
  
    return(
        
        <div className="playlist center">
           <div className="modal-contents md-width-card add-to-playlist relative-box" >
           <button className="dismiss-btn top-right" onClick={()=>setShow(!show)}>x</button>
               <div className="space-between border-bottom relative-box">
                   Add to...
                  
               </div>
               
               <div className="border-bottom">
               {
                   playlist.map((item)=>(
                           <label key={item._id} htmlFor={item._id} className="space-between align-center " >
                                <input type="checkbox" 
                                onClick={()=>{
                                    if(!checkItem(item.videos,currVideo._id)){
                                        dataDispatch({type:"ADD_TO_PLAYLIST",currVid:{...currVideo,selectedPlaylist:true},_id:item._id})
                                        setShowToast(!showToast)
                                    }
                                    else{
                                        dataDispatch({type:"REMOVE_FROM_PLAYLIST",currVid:{...currVideo,selectedPlaylist:false},_id:item._id})
                                        setShowToast(!showToast)
                                    }}}
                                _id={item._id}
                                checked={checkItem(item.videos,currVideo._id)} 
                            ></input>
                           {item.name}
                            </label>
                       
                   ))
               }
               </div>
               {!showPlaylist && <div onClick={()=>setShowPlaylist(!showPlaylist)} style={{cursor:"pointer"}} className="space-between">
                   <div>+</div>
                   <div>Create new playlist</div>
               </div>}
               {showPlaylist && <CreateNewPlaylist showToast={showToast} setShowToast={setShowToast} showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} />}

           </div>
        </div>
    )
}