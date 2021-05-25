import { useState } from "react"
import { useData } from "../contexts/DataDispatch"
import { checkItem } from "../components/VideoDetails";

export const checkItemInPlaylist = (playlist,playlistId, id) => {

    
    return playlist
      .find((list) => list.id === playlistId)
      .videos.some((video) => video.id === id);
  };

const CreateNewPlaylist = ({setShowPlaylist,showPlaylist}) =>{
    const {dataDispatch} = useData()
    const [playListName,setPlayListName] =useState("")
    const [error,setError] = useState("")
    return(
        <div className="create-playlist ">
            <label className="sm-txt">Name</label>
            <input  onChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter Playlist name"></input>
            <label className="sm-txt error-color">{error}</label>

            <div className="center">
            <button className="btn sm-btn primary-btn" onClick={()=>{
                playListName && dataDispatch({type:"ADD_PLAYLIST",playListName:`${playListName}`})
                playListName && setShowPlaylist(!showPlaylist)
                !playListName && setError("please enter playlist name")
                }} >create</button>
            </div>
        </div>
    )
}

export const AddToPlaylist = ( {show,setShow} ) =>{
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
                    //    <div key={item.id}>
                           <label key={item._id} htmlFor={item._id} className="space-between align-center " >
                                <input type="checkbox" 
                                onClick={()=>{!checkItem(item.videos,currVideo._id)?
                                    dataDispatch({type:"ADD_TO_PLAYLIST",currVid:{...currVideo,selectedPlaylist:true},_id:item._id}):
                                    dataDispatch({type:"REMOVE_FROM_PLAYLIST",currVid:{...currVideo,selectedPlaylist:false},_id:item._id})}}
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
               {showPlaylist && <CreateNewPlaylist showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} />}

           </div>
        </div>
    )
}