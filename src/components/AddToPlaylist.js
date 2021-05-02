import { useState } from "react"
import { useData } from "../contexts/DataDispatch"
import { checkItem } from "../components/VideoDetails";

export const checkItemInPlaylist = (playlist,playlistId, id) => {

    
    return playlist
      .find((list) => list.id === playlistId)
      .videos.some((video) => video.id === id);
  };

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
// const obj1={
//     id:"default",
//     name:"default",
//     videos:[],
    
// }
export const AddToPlaylist = ( {show,setShow} ) =>{
    const [showPlaylist,setShowPlaylist] = useState(false);

    const {library,dataDispatch,currVideo} = useData()
    const playlist=library.playlist;
    // const checkItemInPlaylist = (playlistId, id) => {
    //     return playlist
    //       .find((list) => list.id === playlistId)
    //       .videos.some((video) => video.id === id);
    //   };
    // const playlistKeys=Object.keys(playlist)
    // console.log(show)
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
                    //    <div key={item.id}>
                           <label key={item.id} htmlFor={item.id} className="space-between align-center " >
                                <input type="checkbox" 
                                onClick={()=>{!checkItem(item.videos,currVideo.id)?
                                    dataDispatch({type:"ADD_TO_PLAYLIST",currVid:{...currVideo,selectedPlaylist:true},id:item.id}):
                                    dataDispatch({type:"REMOVE_FROM_PLAYLIST",currVid:{...currVideo,selectedPlaylist:false},id:item.id})}}
                                id={item.id}
                                checked={checkItem(item.videos,currVideo.id)} 
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
               {showPlaylist && <CreateNewPlaylist playlist={playlist}/>}

           </div>
        </div>
    )
}