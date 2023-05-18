import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider';

const Signup = () => {
    const { createUser, updatUser, googleSignIn, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    const hendalRegister = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        if (password.length < 6) {
            setError('password atlist  6 cractir');
            return
        }
        createUser(email, password)
            .then(async (result) => {
                const createdUser = result.user;
                console.log(createdUser);

                await updatUser(name, photo);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            });
    }
    const hendalgoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate(from)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        // Register Component 
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col w-4/5">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendalRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link state={{ from: location.state }} to={'/login'} className="label-text-alt link link-hover">already have an account? Go to login. </Link>
                            </label>
                        </div>
                        <p><small className='text-red-400'>{error}</small></p>
                        <div className="form-control mt-6">
                            <button className="btn">Register</button>
                        </div>
                    </form>
                    <hr className='border-t-2' />
                    <p className='text-center -m-4 font-semibold'>or</p>
                    <div className="p-8 flex justify-between">
                        <button className='btn w-5/12' onClick={hendalgoogleLogin}><FaGoogle className='me-3' /> google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;