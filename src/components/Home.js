import { Link } from "react-router-dom";
import { useData } from "../contexts/DataDispatch";
import { VideoDB } from "../Video Lib data/videoData";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"
export const Home = ()=>{
    const {dataDispatch} =useData()

    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Artery-Videos</h1>
                <hr/>
            <div className="wrap" >
            {
                VideoDB.map(({id,name,imageURL,videoURL,duration,details})=>(
                    <Link to={`/${id}`} className="thumbnail " 
                    onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{id,name,imageURL,videoURL,duration,details}})}
                    key={id}
                    >
                        <div className="badge-container vertical-card ">
                            <img src={imageURL} style={{height:"150px",width:"250px"}} alt={name} />
                            <span className="duration-badge">{duration}</span>
                        </div>
                        <div className="thumbnail_title">
                            {name}
                        </div>
                    </Link>
                ))
            }
            </div>
        </div>
           
        </div>
    )
}