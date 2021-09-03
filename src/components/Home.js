import { useData } from "../contexts/DataContext";
import { VideoThumbnail } from "./VideoThumbnail";

export const Home = ()=>{
    const {state:{videoData,user}} =useData()
    const userId = user?._id
    return(
        <div className="main-section">
            
            <div className="container right-pad ">
            <h1>Artery-Videos</h1>
                <hr/>
            <div className="wrap " >
            {
               ( 
                   videoData.map((video)=>(
                       <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>                   
                ))
                )
            }
            </div>
        </div>
           
        </div>
    )
}