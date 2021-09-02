import {Link}from "react-router-dom"

export const HambergerBtn = ({showSideNav, setShowSideNav}) =>{
    return(
        <div >
            <svg className="hamberger-btn" onClick={()=>{
                setShowSideNav(!showSideNav)}} viewBox="0 0 100 80" width="30" height="30">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
        </div>
    )
}

export const Navigation = ({showSideNav, setShowSideNav}) =>{
  
    return( 
        <div>
            <nav className="header align-center">
                
                <HambergerBtn showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
                <div>
                    <Link className="nav-links logo" to="/">Atery-Videos</Link>
                </div>
                <div>
                    <Link className="btn md-btn primary-btn" to = "/login">
                        Login
                    </Link>
                </div>
            </nav>        
        </div>
    )
}