import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";

export const checkItem = (arr,id)=>{
    return arr.find(item => item.id===id)
}

export const PlayList = ()=> {

    const {library} =useData()
    const playlist=library.playlist;
    // const playlistVideos=library.playlist;

    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Playlist Videos</h1>
                <hr/>
            <div >
            {
               playlist.map(({id,name,videos,selectPlaylist})=>(
                // <h2>{name}</h2>
                 
                <div >
                 <h2>{name}</h2>
                    
                    {/* if(checkItem(videos,id)){ */}
                        <div className="wrap">
                        {
                        videos.map(({id,name,imageURL,videoURL,duration,details})=>(
                        <Link to={`/${id}`} className="thumbnail " 
                        key={id}
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
                    {/* } */}
                </div>
            ))
            }
            </div>
            </div>
        </div>
    )
}