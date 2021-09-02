// import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { VideoThumbnail } from "./VideoThumbnail";

export const Home = ()=>{
    const {state:{videoData,user}} =useData()
    const userId = user?._id
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Artery-Videos</h1>
                <hr/>
            <div className="wrap" >
            {
               ( 
                   videoData.map((video)=>(
                       <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                    // <Link to={`/${_id}`} className="thumbnail " 
                    // onClick={()=>addToHistory(userId,_id,{_id,name,imageURL,videoURL,duration,details})}
                    // // onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{_id,name,imageURL,videoURL,duration,details}})}
                    // key={_id}
                    // >
                    //     <div className="badge-container vertical-card ">
                    //         <img src={imageURL} style={{height:"150px",width:"250px"}} alt={name} />
                    //         <span className="duration-badge">{duration}</span>
                    //     </div>
                    //     <div className="thumbnail_title">
                    //         {name}
                    //     </div>
                    // </Link>
                ))
                )
            }
            </div>
        </div>
           
        </div>
    )
}