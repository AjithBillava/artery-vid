import { useState } from "react/cjs/react.development"
import { useData } from "../contexts/DataDispatch"

export const CreateNewPlaylist = ({setShowPlaylist,showPlaylist}) =>{
    const {dataDispatch} = useData()
    const [playListName,setPlayListName] =useState("")
    const [error,setError] = useState("")
    return(
        <div className="create-playlist ">
            <label className="sm-txt">Name</label>
            <input  onChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter Playlist name"></input>
            <label className="sm-txt error-color">{error}</label>

            <div className="center">
            <button className="btn sm-btn primary-btn" onClick={()=>{
                playListName && dataDispatch({type:"ADD_PLAYLIST",playListName:`${playListName}`})
                playListName && setShowPlaylist(!showPlaylist)
                !playListName && setError("please enter playlist name")
                }} >create</button>
            </div>
        </div>
    )
}