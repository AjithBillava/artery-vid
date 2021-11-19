import { NavLink}from "react-router-dom"
import { useData } from "../contexts/DataContext"

export const AsideNav = ( ) =>{
  const listCSS={
    fontWeight: "bold",
    backgroundColor: "#383838",
    fill:"white",
    color:"white"
  }
  const {state:{showSideNav},toggleSideNav} = useData()
    return(
        <div className="grey-box"> 
          <div className="side-nav" >

            <div className="list vertical-card">
              <NavLink onClick={()=>toggleSideNav(showSideNav)} className="horizontal align-center spaced-list-item" end  to="/" activeStyle={listCSS}>
              <svg viewBox="0 0 24 24"className="icon" focusable="false" ><g ><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g>
              </svg>
              Home</NavLink>

              <NavLink onClick={()=>toggleSideNav(showSideNav)} className="align-center spaced-list-item" to="/history" activeStyle={listCSS}>
                <svg viewBox="0 0 24 24"className="icon" focusable="false" ><g ><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g>
              </svg>
              History</NavLink>
              <NavLink onClick={()=>toggleSideNav(showSideNav)} className="align-center align-center spaced-list-item" to="/library" activeStyle={listCSS}>
                <svg viewBox="0 0 24 24"className="icon" focusable="false" ><g ><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
              </svg>
              Library</NavLink>
              <NavLink onClick={()=>toggleSideNav(showSideNav)} className="align-center spaced-list-item" to="/liked-videos" activeStyle={listCSS}>
                <svg viewBox="0 0 24 24"className="icon" focusable="false" ><g ><path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path></g>
              </svg>
              Liked videos</NavLink>
              <NavLink onClick={()=>toggleSideNav(showSideNav)} className="align-center spaced-list-item" to="/saved-videos" activeStyle={listCSS}>
              <svg viewBox="0 0 48 48" height="18" width="18" className="icon" focusable="false" ><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>
              </svg>
              Saved videos</NavLink>
            <NavLink onClick={()=>toggleSideNav(showSideNav)} className="align-center spaced-list-item" to="/playlist-videos" activeStyle={listCSS}>
              <svg viewBox="0 0 24 24"className="icon" focusable="false" ><g ><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></g>
              </svg>
              Playlist videos</NavLink>

            </div>
          </div>
          <div onClick={()=>toggleSideNav(showSideNav)} className="grey">

          </div>
        </div>
    )
}

