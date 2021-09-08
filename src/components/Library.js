import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import { VideoThumbnail } from "./VideoThumbnail";

export const NoItemsInComponent = ({action}) =>{
    return(
        <div className="horizontal-card align-center full-width md-txt border-bottom">
            <div>
                You have not {action} any video
            </div>
            <hr/>
        </div>
    )
}


export const Library =() =>{
    const {state:{library,user }} = useData()
    const likedVideos=library.liked;
    const userId=user?._id
    const savedVideos=library.saved;
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Your Library</h1>
                <hr/>
               {
               likedVideos?.length!==0?(<div >
              
                <div className="md-txt space-between align-center">
                    <p>Liked videos</p>
                    <Link className="see-all-link" to="/liked-videos"> see all</Link>
                </div>
                <div className="wrap ">
                {
                    likedVideos?.slice(0,4).map((video)=>(
                        <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                    ))
                }
                </div>
                <hr/>

               </div>)
               :(
                   <NoItemsInComponent action="liked"/>
               )
               }

               {savedVideos?.length!==0?
               (<div >
                <div className="md-txt space-between align-center">
                        <p>Saved videos</p>
                        <Link className="see-all-link" to="/saved-videos"> see all</Link>

                    </div>
                    <div className="wrap">
                    {
                        savedVideos?.slice(0,4).map((video)=>(
                            <VideoThumbnail key={video._id} userId={userId} videoDetails={video}/>
                        ))
                    }
                    </div>
               </div>
               )
                :(
                    <NoItemsInComponent action="saved"/>
                )
               }
            </div>
        </div>
    )
}