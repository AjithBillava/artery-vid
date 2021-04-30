import {Link}from "react-router-dom"
import { AsideNav } from "./Aside_Navigation";

export const Navigation = () =>{
    return(
        <div>
            <nav className="header align-center">
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
        <div className="aside-nav"></div>
                <AsideNav/>
        
        </div>
    )
}