import { useData } from "../contexts/DataContext"
import { Link } from "react-router-dom";
import { VideoThumbnail } from "./VideoThumbnail";

export const History = () =>{
    const {state:{history,user},addToHistory} = useData()
    const userId=user?._id
    console.log(history)
    console.log(history)
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>History</h1>
                <hr/>
            <div className="wrap">
            {
               history?.length!==0?
               history?.map((video)=>(
                <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                
            ))
            
            :
            (
                <div className="md-txt center horizontal-card">
                    <div>
                    You have not watched any videos
                    </div>
                </div>
            )
            }
            </div>
            </div>
        </div>
    )
}