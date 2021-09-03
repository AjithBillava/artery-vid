import { useData } from "../contexts/DataContext"
import { DeleteModal } from "./ModalForDelete";
import { VideoThumbnail } from "./VideoThumbnail";

export const History = () =>{
    const {state:{history,user,showModalForDelete},toggleModalForDelete} = useData()
    const userId=user?._id
    console.log(history)
    console.log(history)
    return(
        <div className="main-section">
            
            <div  className="container right-pad">
            <div className="space-between">
                <h1>History</h1>
                {history.length>0?<p className="clear-history-link" onClick={()=>toggleModalForDelete(showModalForDelete)}>Clear history</p>:""}
                {showModalForDelete && <DeleteModal path="history"/>}
            </div>
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