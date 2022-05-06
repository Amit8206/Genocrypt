import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoute = ( ) => {
    const token = window.localStorage.getItem('token');
    const auth = useSelector(state => state.auth)

    
   
return token ? ( 
                <Outlet />
    
      )  :  (   <Navigate to='/signin' />       )
         
}


export default PrivateRoute;

