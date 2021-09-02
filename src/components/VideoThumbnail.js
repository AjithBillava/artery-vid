import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { useData } from "../contexts/DataContext"

export const VideoThumbnail = ({userId,videoDetails,path}) =>{
    const {addToHistory}=useData()
    console.log(userId,videoDetails)
    const [showOptions,setShowOptions] = useState(false)
    return (
        path==="history"?
        <div className="thumbnail ">
            {/* <Link to={`/${videoDetails._id}`}  
            onClick={()=>addToHistory(userId,videoDetails._id,videoDetails)}
            key={videoDetails._id}
            > */}
                <Link to={`/${videoDetails._id}`}  
            onClick={()=>addToHistory(userId,videoDetails._id,videoDetails)}>
                    <img src={videoDetails.imageURL} style={{height:"150px",width:"250px"}} alt={videoDetails.name} />
                    <span className="duration-badge">{videoDetails.duration}</span>
                </Link>
                <div className="thumbnail-details relative-box ">
                    <div className="thumbnail_title">
                        {videoDetails.name}
                    </div>
                    <i onClick={()=>setShowOptions(!showOptions)} className="icon-btn btn absolute-box right option-icon" 
            style={{fill:"grey"}}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" >
                    <g class="style-scope yt-icon">
                        <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path>
                        </g>
                    </svg>
            </i>
                    {showOptions && <VideoOptions userId={userId} videoId={videoDetails._id} video={videoDetails} />}
                </div>
            {/* </Link> */}
            <div className="relative-box">
            {/* <i onTouchMove={()=>setShowOptions(!showOptions)} className="icon-btn btn absolute-box right option-icon" 
            style={{fill:"grey"}}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" >
                    <g class="style-scope yt-icon">
                        <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path>
                        </g>
                    </svg>
            </i> */}
            </div>
        </div>
        :
        <Link to={`/${videoDetails._id}`} className="thumbnail " 
        onClick={()=>addToHistory(userId,videoDetails._id,videoDetails)}
        // onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{_id,name,imageURL,videoURL,duration,details}})}
        key={videoDetails._id}
        >
            <div className="badge-container vertical-card ">
                <img src={videoDetails.imageURL} style={{height:"150px",width:"250px"}} alt={videoDetails.name} />
                <span className="duration-badge">{videoDetails.duration}</span>
            </div>
            <div className="thumbnail_title">
                {videoDetails.name}
            </div>
        </Link>
    )
}

export const VideoOptions = ({userId,videoId,video})=>{
    const {removeFromHistory} = useData()
    return(
        <div className="new-playlist curve pd-0-2 md-width-card add-to-playlist">
            <p onClick={()=>removeFromHistory(userId,videoId,video)}>Remove from history</p>
        </div>
    )
}