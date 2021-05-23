import { useData } from "../contexts/DataDispatch"
import { Link } from "react-router-dom";

export const NoItemsInComponent = ({action}) =>{
    return(
        <div className="horizontal-card align-center md-txt border-bottom">
            <div>
                You have not {action} any video
            </div>
            <hr/>
        </div>
    )
}


export const Library =() =>{
    const {library} = useData()
    const likedVideos=library.liked;
    const savedVideos=library.saved;
    
    return(
        <div className="main-layout">
            
            <div className="container right-pad">
            <h1>Your Library</h1>
                <hr/>
               {
               likedVideos.length!==0?(<div >
              
                <div className="md-txt space-between align-center">
                    <p>Liked videos</p>
                    <Link className="see-all-link" to="/liked-videos"> see all</Link>
                </div>
                <div className="wrap">
                {
                    likedVideos.slice(0,4).map(({_id,name,imageURL,duration})=>(
                    <Link to={`/${_id}`} className="thumbnail " 
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
                }
                </div>
                <hr/>

               </div>)
               :(
                   <NoItemsInComponent action="liked"/>
               )
               }

               {savedVideos.length!==0?
               (<div >
                <div className="space-between align-center">
                        <p>Saved videos</p>
                        <Link className="md-txt" to="/saved-videos"> see all</Link>
                    </div>
                    <div className="wrap">
                    {
                        savedVideos.slice(0,4).map(({_id,name,imageURL,duration})=>(
                        <Link to={`/${_id}`} className="thumbnail " 
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
                    }
                    </div>
               </div>
               )
                :(
                    <NoItemsInComponent action="saved"/>
                )
               }
            </div>
        </div>
    )
}