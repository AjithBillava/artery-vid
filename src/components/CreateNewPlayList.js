import { useState } from "react"
import { useData } from "../contexts/DataContext"

export const CreateNewPlaylist = ({setShowPlaylist,showPlaylist }) =>{
    const {state:{user},addPlaylist} = useData()
    const [playListName,setPlayListName] =useState("")
    const [error,setError] = useState("")

    const userId=user?._id
    return(
        <div className="create-playlist ">
            <label>Name</label>
            <input className="mt-sm" onChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter Playlist name"></input>
            <label className=" error-color">{error}</label>

            <div className="center">
            <button className="btn sm-btn primary-btn" onClick={()=>{
                playListName && addPlaylist(userId,playListName)
                playListName && setShowPlaylist(!showPlaylist)
                !playListName && setError("please enter playlist name")
                }} >create</button>
            </div>
        </div>
    )
}