import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";

export const History = () =>{
    const {history} = useData()
    console.log(history)
    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>History</h1>
                <hr/>
            <div className="wrap">
            {
               history.map(({id,name,imageURL,videoURL,duration,details})=>(
                <Link to={`/${id}`} className="thumbnail " 
                key={id}
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
            }
            </div>
            </div>
        </div>
    )
}