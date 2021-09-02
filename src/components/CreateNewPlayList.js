import { useState } from "react"
import { useData } from "../contexts/DataContext"

export const CreateNewPlaylist = ({setShowPlaylist,showPlaylist,showToast,setShowToast}) =>{
    const {state:{user},addPlaylist} = useData()
    const [playListName,setPlayListName] =useState("")
    const [error,setError] = useState("")

    const userId=user?._id
    return(
        <div className="create-playlist ">
            <label className="sm-txt">Name</label>
            <input  onChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter Playlist name"></input>
            <label className="sm-txt error-color">{error}</label>

            <div className="center">
            <button className="btn sm-btn primary-btn" onClick={()=>{
                playListName && addPlaylist(userId,playListName)
                // playListName && dataDispatch({type:"ADD_PLAYLIST",playListName:`${playListName}`})
                playListName && setShowPlaylist(!showPlaylist)
                playListName && setShowToast(!showToast)
                !playListName && setError("please enter playlist name")
                }} >create</button>
            </div>
        </div>
    )
}