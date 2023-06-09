import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import logo from '../assets/logo.png'

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        // handler Component
        <div className="navbar bg-base-100 shadow-md my-4"
            data-aos="fade-dawn"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={"/"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Home</NavLink></li>
                        <li><NavLink to={"/all-products"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>All Toy</NavLink></li>
                        {
                            user &&
                            <span className=''>
                                <li><NavLink to={"/my-toy"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>My Toy</NavLink></li>
                                <li><NavLink to={"/add-products"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Add A Toy</NavLink></li>
                            </span>
                        }

                        <li><NavLink to={"/blog"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Blog</NavLink></li>
                        <li><NavLink to={'/about'} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>About</NavLink></li>
                        <li><NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Contact</NavLink></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                    <img className='w-20 drop-shadow-sm' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Home</NavLink></li>
                    <li><NavLink to={"/all-products"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>All Toy</NavLink></li>
                    {
                        user &&
                        <span className='flex'>
                            <li><NavLink to={"/my-toy"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>My Toy</NavLink></li>
                            <li><NavLink to={"/add-products"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Add A Toy</NavLink></li>
                        </span>
                    }

                    <li><NavLink to={"/blog"} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Blog</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>About</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'bg-slate-200' : 'default')}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <span className='flex gap-6 justify-center content-center'>
                            {
                                user.photoURL &&
                                <img className='w-12 rounded-full' title={user?.displayName ? user?.displayName : 'hello'} src={user?.photoURL} />
                            }
                            <Link onClick={logOut} className="btn bg-cyan-500 border-0 hover:bg-cyan-600">LogOut</Link> </span>
                        : <Link to={'/login'} className="btn bg-cyan-500 border-0 hover:bg-cyan-600">Login</Link>
                }

            </div>
        </div>
    );
};

export default Nav;