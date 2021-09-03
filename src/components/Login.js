import { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useData } from "../contexts/DataContext";

export const loginReducer  = (state,{type,payload}) =>{
    switch (type){
        case "email":
            return {
            ...state,
            email: payload
            };
        case "password":
            return {
            ...state,
            password: payload
            };
        case "reset":
            return {
            ...state,
            password: "",
            email: ""
            };
        default:
            return state;
        }
}

export const Login = () =>{
    const {state:{isAuthenticated},loginUser,logoutUser} = useData()
    const {state} =useLocation()
    const navigate = useNavigate()

    const [{ email, password }, dispatch] = useReducer(loginReducer, {
        email: "",
        password: ""
      });

    return(
        <div className="main-section center">
            {isAuthenticated?
            <div className="container">
                <button className="remove-btn md-btn btn" onClick={()=>logoutUser()}>Logout</button>
            </div>
            :
            <form className=" card block-card">
                <div className="center sub-heading mr1">Login page</div>
                <div className="vertical-card center">
                    <input className="input curve" type="email" placeholder="Email" required 
                    onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="password" placeholder="Password" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <button  className="secondary-btn md-btn btn" value="send" onClick={(e)=>
                    {       
                        if(!isAuthenticated){
                            loginUser(email,password,state,navigate)
                            e.preventDefault()
                        }
                        else{
                            logoutUser()
                        }
                        }
                    }          

                    >
                        Login
                    </button>
                    <div className="grey-text">
                        Not registered yet?
                        <Link to="/register"> Register here</Link>
                    </div>
                </div>
                
            </form>
            }
            
        </div>
    )
} 