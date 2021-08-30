import { useData } from "../contexts/DataContext"
import { Link } from "react-router-dom";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import { useState } from "react";
import { CreateNewPlaylist } from "./CreateNewPlayList";

export const PlayList = ({showToast,setShowToast})=> {
    const [showPlaylist,setShowPlaylist] = useState(false);

    const {state:{library},dataDispatch} =useData()
    const playlist=library.playlist;

    return(
        <div className="main-section">
            
            <div className="container right-pad">
                <div className="horizontal align-center">
                    <h1>Playlist Videos</h1>
                    <button className="btn primary-btn pd-0-2" title="new playlist" onClick={()=>setShowPlaylist(!showPlaylist)} >+</button>
                    <div>
                        {showPlaylist &&
                        <div className="new-playlist curve pd-0-2 md-width-card add-to-playlist">
                            <button className="dismiss-btn top-right" onClick={()=>setShowPlaylist(!setShowPlaylist)}>x</button>
                            <CreateNewPlaylist showToast={showToast} setShowToast={setShowToast} showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} />
                        </div>
                        }
                    </div>
                </div>
                <hr/>

            <div className="mg-top-2 " >
            {
                playlist.length!==0?
               playlist.map(({playListName,videos,_id:playlistID})=>(
                 
                <div  key={playlistID} >
                    {videos.length>4?
                    <div className="md-txt space-between align-center">
                        <p>{playListName}</p>
                        <Link className="see-all-link" to={`/playlist-videos/${playlistID}`}> see all</Link>
                    </div>
                    :
                    <div className="md-txt space-between align-center">
                        <Link className="link" to={`/playlist-videos/${playlistID}`}>{playListName}</Link>
                    </div>
                    }
                        <div className="wrap">
                        {
                        videos.map(({_id,name,imageURL,videoURL,duration,details})=>(
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
                       }
                    </div>
                </div>
            )):
            (
                <div className="md-txt">
                    There are no playlist
                </div>
            )
            }
            </div>
            </div>
        </div>
    )
}