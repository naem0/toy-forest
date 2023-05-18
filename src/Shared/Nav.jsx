import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Nav = () => {
        const {user, logOut}= useContext(AuthContext);
    return (
        // handler Component
        <div className="navbar bg-base-100 shadow-md my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={"/"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Home</NavLink></li>
                        <li><NavLink to={"/all-products"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>All Products</NavLink></li>
                        <li><NavLink to={'/blog'} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Blog</NavLink></li>
                        <li><NavLink to={'/about'} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>About</NavLink></li>
                        <li><NavLink to={'/contact'} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Contact</NavLink></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Chef Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Home</NavLink></li>
                    <li><NavLink to={"/all-products"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>All Products</NavLink></li>             
                    <li><NavLink to={"/my-toy"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>My Toy</NavLink></li>             
                    <li><NavLink to={"/add-products"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Add Products</NavLink></li>             
                    <li><NavLink to={"/blog"} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Blog</NavLink></li>
                    <li><NavLink to={'/about'} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>About</NavLink></li>
                    <li><NavLink to={'/contact'} className={({isActive})=>(isActive ? 'bg-slate-200': 'default')}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? 
                    <span className='flex gap-6 justify-center content-center'>
                        {
                            user.photoURL &&
                            <img className='w-12 rounded-full' title ={user.displayName ? user.displayName : 'hello'} src= {user.photoURL} />
                        }  
                    <Link onClick={logOut} className="btn">LogOut</Link> </span>
                    :<Link to={'/login'} className="btn">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Nav;