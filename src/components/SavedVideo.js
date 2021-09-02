import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import { NoItemsInComponent } from "./Library";
import { VideoThumbnail } from "./VideoThumbnail";

export const SavedVideos = ()=>{
    const {state:{library,user},addToHistory} = useData()
    const savedVideos=library.saved;
    const userId=user?._id
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Saved Videos</h1>
                <hr/>
            <div className="wrap">
            {
                savedVideos?.length!==0 ?
               savedVideos?.map((video)=>(
                <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                ))
                :
                <NoItemsInComponent action="saved" />
            }
            </div>
            </div>
        </div>
    )
}