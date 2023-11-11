import { useData } from "../contexts/DataContext";
import { NoItemsInComponent } from "./Library";
import { VideoThumbnail } from "./VideoThumbnail";

export const LikedVideos = ()=>{
    const {state:{library,user}} = useData()
    const likedVideos=library.liked;
    const userId=user?._id
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Liked Videos</h1>
                <hr/>
            <div className="wrap">
            {
                likedVideos?.length!==0 ?
                likedVideos?.map((video)=>(
                    <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                ))
                :
                <NoItemsInComponent action="liked" />

            }
            </div>
            </div>
        </div>
    )
}