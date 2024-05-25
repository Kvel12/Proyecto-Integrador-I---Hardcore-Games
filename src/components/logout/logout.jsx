import { Navigate, useNavigate } from "react-router-dom"
import { authContext, useAuth } from "../../context/AuthContext"
import "./styleslogout.css";
import { ConstNode } from "three/examples/jsm/nodes/Nodes.js"


export default function Logout() {

const auth= useAuth()
const navigate = useNavigate()

const onHandleButtonLogout= async()=>{
    await auth.logout()
    .then((res)=>navigate("/"))
    .catch((error)=>console.error(error))
}
    return (
        <div className="button-logout">
          <button onClick={onHandleButtonLogout}> exit </button>
        </div>
    )
}