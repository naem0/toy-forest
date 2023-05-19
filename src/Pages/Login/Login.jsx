import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Authprovider';

const Login = () => {
    const { signIn, googleSignIn, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    if (loading) {
        <progress className="progress w-56"></progress>
    }

    const hendalLoging = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const createdUser = result.user;
                navigate(from)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
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
        // loading Page 
        <div style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1442386384/vector/christmas-banner-with-copy-space-santa-claus-in-a-snowy-forest-carries-gifts-to-children.jpg?s=612x612&w=0&k=20&c=8eCSjsH8NPB1xaqnNjfpUGE3VykxhJtZXSh14F8WW8Q=')`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/3">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <form onSubmit={hendalLoging} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to={'/signup'} className="label-text-alt link link-hover">New to tha Chef Hantar? Go to Register. </Link>
                                    </label>
                                </div>
                                <p><small className='text-red-400'>{error}</small></p>
                                <div className="form-control mt-6">
                                    <button className="btn">Login</button>
                                </div>
                            </form>
                            <div className="divider px-8">OR</div>

                            <button className='btn w-full' onClick={hendalgoogleLogin}><FaGoogle className='me-3' /> google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;