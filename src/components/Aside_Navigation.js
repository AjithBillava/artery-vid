import { NavLink}from "react-router-dom"

export const AsideNav = ( {showSideNav} ) =>{
    return(
        
        // <div className="side-nav" style={{display:showSideNav}}>
        <div className="side-nav" style={{display:showSideNav}}>

        <div className="list vertical-card">
            <NavLink className="horizontal align-center  spaced-list-item" end  to="/" activeStyle={{
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


{/* <svg className="icon-btn  relative-box" viewBox="0 0 24 24" >
              <g class="style-scope yt-icon">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon"></path>
              </g>
            </svg> */}
        </div>
        </div>
    )
}

