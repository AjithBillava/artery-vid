import { useData } from "../contexts/DataDispatch";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import { Link } from "react-router-dom";
import { NoItemsInComponent } from "./Library";

export const LikedVideos = ()=>{
    const {library,dataDispatch} = useData()
    const likedVideos=library.liked;
    console.log(likedVideos)
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Liked Videos</h1>
                <hr/>
            <div className="wrap">
            {
                likedVideos.length!==0?
                likedVideos.map(({_id,name,imageURL,videoURL,duration,details})=>(
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
                <NoItemsInComponent action="liked" />

            }
            </div>
            </div>
        </div>
    )
}