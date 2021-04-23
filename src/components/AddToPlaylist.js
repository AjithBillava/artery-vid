import { useState } from "react"
import { useData } from "../contexts/DataDispatch"

// import {}
const CreateNewPlaylist = ({playlist}) =>{
    const {dataDispatch} = useData()
    const [playListName,setPlayListName] =useState("")

    return(
        <div className="vertical-card">
            <label>Name</label>
            <input onChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter Playlist name"></input>

            <button onClick={()=>dataDispatch({type:"ADD_PLAYLIST",playListName:`${playListName}`})} >create</button>
        </div>
    )
}

export const AddToPlaylist = ( {show,setShow,currVideo} ) =>{
    const [showPlaylist,setShowPlaylist] = useState(false);

    const {library,dataDispatch} = useData()
    const playlist=library.playlist;

    // const playlistKeys=Object.keys(playlist)
    console.log(show)
    return(
        
        <div className="playlist center">
           <div className="modal-contents vertical-card md-width-card" >
               <div className="space-between border-bottom">
                   Add to..
                   <button onClick={()=>setShow(!show)}>x</button>
               </div>
               
               <div className="border-bottom">
               {
                   playlist.map((item)=>(
                       <div className="space-between align-center ">
                           <input type="checkbox" checked={item.selectPlaylist} onChange={()=>dataDispatch({type:"ADD_TO_PLAYLIST",currVid:currVideo,id:item.id})} ></input>
                           {item.name}
                       </div>
                   ))
               }
               </div>
               {!showPlaylist && <div onClick={()=>setShowPlaylist(!showPlaylist)} style={{cursor:"pointer"}} className="space-between">
                   <div>+</div>
                   <div>Create new playlist</div>
               </div>}
               {showPlaylist && <CreateNewPlaylist playlist={playlist}/>}

           </div>
        </div>
    )
}