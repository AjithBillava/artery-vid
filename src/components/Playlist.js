import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"

export const PlayList = ()=> {

    const {library,dataDispatch} =useData()
    const playlist=library.playlist;

    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Playlist Videos</h1>
                <hr/>
            <div >
            {
               playlist.map(({name,videos,_id:playlistID})=>(
                 
                <div  >
                    {videos.length!==0?
                    <div className="md-txt space-between align-center">
                        <p>{name}</p>
                        <Link className="see-all-link" to={`/playlist-videos/${playlistID}`}> see all</Link>
                    </div>
                    :
                    <div className="md-txt space-between align-center">
                        <Link className="link" to={`/playlist-videos/${playlistID}`}>{name}</Link>
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
            ))
            }
            </div>
            </div>
        </div>
    )
}