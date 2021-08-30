import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
// import { VideoDB } from "../Video Lib data/videoData";
import {ADD_TO_HISTORY} from "../reducers/DataReducer"
import { useAxios } from "../server/server.request";
import { LoaderComponent } from "./loader";
export const Home = ()=>{
    const {state:{isLoading,videoData},dataDispatch} =useData()
    // const VideoDB = useAxios()
    // console.log(VideoDB)
    return(
        <div className="main-section">
            
            <div className="container right-pad">
            <h1>Artery-Videos</h1>
                <hr/>
            <div className="wrap" >
            {
            //    !isLoading?
               ( 
                   videoData.map(({_id,name,imageURL,videoURL,duration,details})=>(
                    <Link to={`/${_id}`} className="thumbnail " 
                    onClick={()=>dataDispatch({type:ADD_TO_HISTORY,video:{_id,name,imageURL,videoURL,duration,details}})}
                    key={_id}
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
                )
                // :
                // (
                //     <LoaderComponent/>
                // )
            }
            </div>
        </div>
           
        </div>
    )
}