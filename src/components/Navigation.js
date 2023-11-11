import {Link}from "react-router-dom"
import { useData } from "../contexts/DataContext"

export const HambergerBtn = () =>{
    const {state:{showSideNav},toggleSideNav} = useData()
    return(
        <div >
            {!showSideNav?
            <svg className="hamberger-btn" onClick={()=>{
                toggleSideNav(showSideNav)}} viewBox="0 0 100 80" width="30" height="30">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
            :
            <div onClick={()=>{
                toggleSideNav(showSideNav)}}  className="close-btn">
                <div className="close" ></div>
            </div>
            }
        </div>
    )
}

export const Navigation = () =>{
    const {state:{user,isAuthenticated}} = useData()
    return( 
        <div>
            <nav className="header align-center">
                
                <HambergerBtn/>
                <div>
                    <Link className="nav-links md-txt logo" to="/">Artery-Videos</Link>
                </div>
                <div>
                <Link  to="/login">
                          {isAuthenticated?
                          <div className="avatar ">
                            {user?.firstname.charAt(0).toUpperCase() + user?.lastname.charAt(0).toUpperCase()}
                          </div> 
                          : 
                          <div className="btn md-btn primary-btn">
                            login
                          </div>}
                        </Link>
                </div>
            </nav>        
        </div>
    )
}