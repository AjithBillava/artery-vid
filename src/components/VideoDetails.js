import { useState } from "react";
import { useParams } from "react-router";
import { useData } from "../contexts/DataContext";
import {AddToPlaylist} from "./AddToPlaylist"
import { checkItem } from "../utils/CheckItem";

export const VideoDetails = () =>{
    const [show,setShow] = useState(false)

    const {state:{currVideo,library,user},addToLikedVideos,removeFromLikedVideos,addToSavedVideos,removeFromSavedVideos} =useData()
    const LikedVideos=library.liked;
    const SavedVideos=library.saved;
    const userId= user._id
    const video=currVideo;
    const {currVideoID} =useParams()

    return(
        <div className="main-section"> 
            <div className="container center ">
                {
                     currVideoID===video._id?
                <div className="section ">
                    <div >
                    <iframe width="100%" height="335" src={video.videoURL} 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="md-txt">
                        {video.name}
                    </div>

                    <div className="space-between">
                    <i className="icon-btn btn"
                    title="like"
                    style={{
                        fill: `${checkItem(LikedVideos,video._id) ? "var(--primary-bg)" : "grey"}`
                      }}
                    onClick={
                        ()=>{
                            if(checkItem(LikedVideos,video._id)){ 
                                removeFromLikedVideos(userId,video._id) 
                            }
                            else{
                                addToLikedVideos(userId,video._id) 

                            }
                        }}
                    >
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" >
                            <g class="style-scope yt-icon">
                                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon">

                                </path>
                            </g>
                        </svg>
                    </i>
                    <i className="icon-btn btn"
                    title="save"
                    style={{
                        fill: `${checkItem(SavedVideos,video._id) ? "var(--primary-bg)" : "grey"}`
                      }}
                    onClick={()=>{
                        if(checkItem(SavedVideos,video._id)){ 
                            removeFromSavedVideos(userId,video._id) 
                        } 
                        else {
                            addToSavedVideos(userId,video._id) 
                        }}}>
                        <svg aria-label="Remove" class="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>
                    </i>

                    <i onClick={()=>setShow(!show)} className="icon-btn btn relative-box" 
                    style={{fill:"grey"}}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" >
                            <g class="style-scope yt-icon">
                                <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon">
                                </path>
                            </g>
                        </svg>
                    </i>
                    </div>

                    <div>
                      {video.details}
                    </div>

                </div>
                :
                <div>
                    broken link
                </div>

               } 
                
            </div>
             {show&&<AddToPlaylist show={show} setShow={setShow}  />}
        </div>
    )
}