import { NavLink,Link } from "react-router-dom";

 import logo from '../../src/assets/logonw.png'
//  import logo from '../../src/assets/logo-1.png'
import '../shared/style.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import auth from "../firebase/firebase.config";
const NavBar = () => {

    const navlinks=<>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
       <li><NavLink to='/class'>Classes</NavLink></li>
       <li><NavLink to='/price'>Prices</NavLink></li>
       <li><NavLink to='/trainers'>Trainers</NavLink></li>
       <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>

    const {
        user, logOut
    }=useContext(AuthContext)


    const handleLogOut =()=>{
        logOut().then(r=>{
            console.log(r.message)
        }).catch(e=>{
            console.log(e.message)
        })
    }
    // console.log(user?.displayName,'from navbar');
    return (
        
      <>
          <div className="navbar z-10 bg-teal-300 sticky top-0  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
           
            ">
            
            {
                navlinks
            }
            </ul>
          </div>
          <NavLink  to='/'>
           <img className="bg-teal-300 w-[14rem]" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="sidebar" className="menu menu-horizontal px-1">
           {
           navlinks}
          </ul>
        </div>
        <div className="navbar-end">
         <p className="font-bold "> {user && 'Welcome, '+ user?.displayName}</p>
       <label tabIndex={0} className="btn btn-ghost btn-circle avatar  mx-2">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
          </div>
      </label>
{
    user ? <> <Link  >
    <button to='/login' onClick={handleLogOut} className="btn border-none capitalize hover:bg-orange-400 bg-black text-white">Log Out</button>
    </Link> 
    </> : <> <Link to='/register' >
     <button className="btn capitalize hover:bg-orange-400 bg-teal-300">Register</button>
     </Link> 
    </>
}
         
     
         </div>
      </div>
      </>
    );
};

export default NavBar;