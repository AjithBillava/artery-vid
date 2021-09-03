import { Link } from "react-router-dom"
import { useData } from "../contexts/DataContext"

export const DeleteModal = ({playListName,playlist_id,path}) =>{
    const {state:{user,showModalForDelete},removePlaylist,clearHistory,toggleModalForDelete} = useData()
    return(
        path==="history"?
        <div  className="playlist center">
            <div className="modal-contents md-width-card add-to-playlist relative-box">
                <div>
                    Do you want clear history?
                </div>
                <div className="horizontal justify-center">
                    <button onClick={()=>toggleModalForDelete(showModalForDelete)} className="btn link-btn pd-0-2">No</button>
                    <Link to="/history" onClick={()=>{
                        clearHistory(user._id)
                        toggleModalForDelete(showModalForDelete)}} className="btn primary-btn pd-0-2">
                        Yes
                    </Link>
                </div>
            </div>
        </div>
        :
        <div  className="playlist center">
            <div className="modal-contents md-width-card add-to-playlist relative-box">
                <div>
                    Delete play-list "{playListName}"?
                </div>
                <div className="horizontal justify-center">
                    <button onClick={()=>toggleModalForDelete(showModalForDelete)} className="btn link-btn pd-0-2">No</button>
                    <Link to="/playlist-videos" onClick={()=>{
                        removePlaylist(user._id,playlist_id)
                        toggleModalForDelete(showModalForDelete)
                        }} className="btn primary-btn pd-0-2">
                        Yes
                    </Link>
                </div>
            </div>
        </div>
    )
}