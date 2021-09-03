import { Link } from "react-router-dom"
import { useData } from "../contexts/DataContext"

export const VideoThumbnail = ({userId,videoDetails}) =>{
    const {addToHistory}=useData()
    console.log(userId,videoDetails)
    return (        
        <Link to={`/${videoDetails._id}`} className="thumbnail " 
        onClick={()=>addToHistory(userId,videoDetails._id,videoDetails)}
        key={videoDetails._id}
        >
            <div className="badge-container vertical-card ">
                <img src={videoDetails.imageURL} className="thumbnail-image" alt={videoDetails.name} />
                <span className="duration-badge">{videoDetails.duration}</span>
            </div>
            <div className="thumbnail_title">
                {videoDetails.name}
            </div>
        </Link>
    )
}
