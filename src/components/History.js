import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"

export const History = () =>{
    const {history,dataDispatch} = useData()
    console.log(history)
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>History</h1>
                <hr/>
            <div className="wrap">
            {
                history.length!==0?
               history.map(({_id,name,imageURL,videoURL,duration,details})=>(
                <Link to={`/${_id}`} className="thumbnail " 
                onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{_id,name,imageURL,videoURL,duration,details}})}
                key={_id}
                >
                    <div className="badge-container vertical-card ">
                        <img src={imageURL} style={{height:"150px",width:"250px"}} alt={name}/>
                        <span className="duration-badge">{duration}</span>
                    </div>
                    <div className="thumbnail_title">
                        {name}
                    </div>
                </Link>
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