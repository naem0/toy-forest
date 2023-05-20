/* eslint-disable react/prop-types */
import { useContext } from 'react'; 
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import Swal from 'sweetalert2';

// PraivatRoute

const PraivatRoute = ({children}) => {
    const{user}= useContext(AuthContext);
    const location = useLocation();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }

    

    if (user) {
        return children;
    }
    Swal.fire(
        'You have to login first',
      )
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PraivatRoute;