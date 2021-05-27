import { Link } from "react-router-dom"
import { useData } from "../contexts/DataDispatch"

export const DeleteModal = ({playListName,playlist_id,show,setShow}) =>{
    const {dataDispatch} = useData()
    return(
        <div  className="playlist center">
            <div className="modal-contents md-width-card add-to-playlist relative-box">
                <div>
                    Delete play-list "{playListName}"?
                </div>
                <div className="horizontal justify-center">
                    <button onClick={()=>setShow(!show)} className="btn link-btn pd-0-2">No</button>
                    <Link to="/playlist-videos" onClick={()=>dataDispatch({type:"REMOVE_PLAYLIST",_id:playlist_id})} className="btn primary-btn pd-0-2">
                        Yes
                    </Link>
                </div>
            </div>
        </div>
    )
}