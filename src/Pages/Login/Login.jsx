import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Authprovider';
import usetitle from '../../component/useTitle';
import bg from '../../assets/3d-cartoon-background-children2.jpg'

const Login = () => {
    usetitle('Loging')
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
            backgroundImage: `url(${bg})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }}>
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:w-1/2">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login Now!</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <form onSubmit={hendalLoging}>
                                        <div className="relative">
                                            <input id="email" required name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative my-4">
                                            <input id="password" required name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <label className="label">
                                            <Link to={'/signup'} className="label-text-alt link link-hover">New to tha toy Shop? Go to Register. </Link>
                                        </label>
                                        <p><small className='text-red-400'>{error}</small></p>
                                        <div className="relative">
                                            <button className="bg-blue-500 w-full text-white rounded-md  py-2">Submit</button>
                                        </div>
                                    </form>
                                    <div className="divider px-8">OR</div>

                                    <button className='btn w-full border-0 bg-blue-500 hover:bg-blue-600' onClick={hendalgoogleLogin}><FaGoogle className='me-3' /> google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;