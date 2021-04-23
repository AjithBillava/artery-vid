import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";


export const Library =() =>{
    const {library} = useData()
    const likedVideos=library.liked;
    const savedVideos=library.saved;

    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Your Library</h1>
                <hr/>
               <div >
              
                <div className="space-between align-center">
                    <p>Liked videos</p>
                    <Link className="md-txt" to="/liked-videos"> see all</Link>
                </div>
                <div className="wrap">
                {
                    likedVideos.slice(0,2).map(({id,name,imageURL,videoURL,duration,details})=>(
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
                <hr/>

               </div>
               <div >
               
                <div className="space-between align-center">
                    <p>Saved videos</p>
                    <Link className="md-txt" to="/saved-videos"> see all</Link>
                </div>
                <div className="wrap">
                {
                    savedVideos.slice(0,2).map(({id,name,imageURL,videoURL,duration,details})=>(
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
        </div>
    )
}