import { useData } from "../contexts/DataDispatch"
import { Link, useParams } from "react-router-dom";
// import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import {ADD_TO_HISTORY} from "../reducers/DataReducer"

export const VideoList = ({videos,name:playListName}) =>{
    const {dataDispatch} = useData()
    console.log(videos)
    return(
        <div className="container right-pad ">
                <h1>{playListName}</h1>
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
                            There are no videos in {playListName}
                        </div>
                    }
                </div>           

        </div>           
    )
}


export const CurrentPlaylist = () =>{

    const {library} = useData()
    const playlist=library.playlist;
    const {selected_playlist_ID} = useParams()
    console.log(selected_playlist_ID)
    // console.log(playlist)


    const currentPlaylistIndex= playlist.findIndex(list=>list._id!==selected_playlist_ID)

    const currentPlaylist= playlist.filter(list=>list._id===selected_playlist_ID)
    // const currentPlaylist= playlist.find(list=>list._id!==selected_playlist_ID)
    console.log(currentPlaylist)

    console.log(currentPlaylistIndex)
    return(
        <div className="main-layout">
         {
             currentPlaylist.map(({name,videos})=>(
                
                <VideoList name={name} videos={videos} />
            
            ))
         }       
        </div>
    )
}