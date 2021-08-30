import { useData } from "../contexts/DataContext"
import { Link, useParams } from "react-router-dom";
// import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import { DeleteModal } from "./ModalForDelete";
import { useState } from "react";

export const VideoList = ({videos,name:playListName,playlist_id}) =>{
    const {dataDispatch} = useData()
    console.log(videos)
    const [show,setShow] = useState(false)
    return(
        <div className="container right-pad ">
                <div className="horizontal align-center">
                    <h1>{playListName}</h1>

                    <button onClick={()=>setShow(!show)} className="btn primary-btn pd-0-2">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={{width:"1rem",fill:"black"}} ><g ><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g></svg>
                    </button>
                    {show && <DeleteModal setShow={setShow} show={show} playListName={playListName} playlist_id={playlist_id}/>}
                    <hr/>
                </div>
            <hr/>

                <div className="wrap">
                    {videos.length!==0?
                        videos.slice(0,4).map(({_id,name,imageURL,videoURL,duration,details})=>(
                            <Link to={`/${_id}`} className="thumbnail " 
                    onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{_id,name,imageURL,videoURL,duration,details}})}

                            key={_id}
                            >
                                <div className="badge-container vertical-card ">
                                    <img src={imageURL} style={{height:"150px",width:"250px"}} alt={name}/>
                                    <span className="duration-badge">{duration}</span>
                                </div>
                                <div className="thumbnail_title">
                                    {name}
                                </div>
                            </Link>
                        ))
                        :
                        <div  className="horizontal-card align-center md-txt">
                            There are no videos in "{playListName}" play-list
                        </div>
                    }
                </div>           

        </div>           
    )
}


export const CurrentPlaylist = () =>{

    const {state:{library}} = useData()
    const playlist=library.playlist;
    const {selected_playlist_ID} = useParams()
    console.log(selected_playlist_ID) 

    const currentPlaylist= playlist.filter(list=>list._id===selected_playlist_ID)
    console.log(currentPlaylist)

    
    return(
        <div className="main-section">
         {
             currentPlaylist.map(({playListName,videos})=>(
                
                <VideoList name={playListName} videos={videos} playlist_id={selected_playlist_ID} />
            
            ))
         }       
        </div>
    )
}