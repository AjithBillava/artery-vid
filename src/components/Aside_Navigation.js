import { NavLink}from "react-router-dom"

export const AsideNav = ( ) =>{
    return(
        
        <div className="aside-nav">

        <div className="list vertical-card">
            <NavLink end className="spaced-list-item" to="/" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Home</NavLink>

            <NavLink className="spaced-list-item" to="/history" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>History</NavLink>
            <NavLink className="spaced-list-item" to="/library" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Library</NavLink>
             <NavLink className="spaced-list-item" to="/liked-videos" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Liked videos</NavLink>
             <NavLink className="spaced-list-item" to="/saved-videos" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Saved videos</NavLink>
          <NavLink className="spaced-list-item" to="/playlist-videos" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Playlist videos</NavLink>


        </div>
        </div>
    )
}