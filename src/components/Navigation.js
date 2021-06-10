import { useState } from "react";
import {Link}from "react-router-dom"
// import { useEffect } from "react/cjs/react.development";
import { AsideNav } from "./Aside_Navigation";

export const HambergerBtn = ({showSideNav, setShowSideNav}) =>{
    return(
        <div >
            <svg className="hamberger-btn" onClick={()=>{
                // (showSideNav==="flex")? setShowSideNav("none"):setShowSideNav("flex")}} viewBox="0 0 100 80" width="30" height="30">
                setShowSideNav(!showSideNav)}} viewBox="0 0 100 80" width="30" height="30">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
        </div>
    )
}

export const Navigation = () =>{
    const [showSideNav, setShowSideNav] = useState(true)
    // const [showSideNav, setShowSideNav] = useState("")
  
    return( 
        <div>
            <nav className="header align-center">
                
                <HambergerBtn showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
                <div>
                    <Link className="nav-links logo" to="/">Atery-Videos</Link>
                </div>
                <div>
                    {/* <ul className="non-bullet nav-social-links inline-list align-center spa">
                        <li>notification</li>
                        <li>saved</li>
                    </ul> */}
                </div>
            </nav>
        {/* <div className="aside-nav"> */}
        {showSideNav && <AsideNav/>}
        {/* <AsideNav showSideNav={showSideNav  } /> */}

        {/* </div> */}
        
        </div>
    )
}