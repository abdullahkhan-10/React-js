import {useDispatch} from "react-redux"
import myAuthService from "../../appWrite/myAuth";
import { logOut } from "../../reduxToolkit/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        myAuthService.Logout().then( () =>{
            dispatch( logOut())
        })
    }

    return(
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >

        </button>
    )
}

export default LogoutBtn;
