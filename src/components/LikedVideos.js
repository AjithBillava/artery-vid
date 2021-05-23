import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";

export const LikedVideos = ()=>{
    const {library} = useData()
    const likedVideos=library.liked;
    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Liked Videos</h1>
                <hr/>
            <div className="wrap">
            {
               likedVideos.map(({_id,name,imageURL,videoURL,duration,details})=>(
                <Link to={`/${_id}`} className="thumbnail " 
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
        </div>
    )
}