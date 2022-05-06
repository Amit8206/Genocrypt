import { userConstants } from "./Constants"
import axios from '../Helper/Axios'
// import { Navigate, useNavigate } from 'react-router-dom';




// User SignUp Action
export const signup = (user) => {

    console.log(user);
    // const navigate = useNavigate();


    return async (dispatch) => {


        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/signup`, {
            ...user
        });


        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            });
            // navigate('/')
        } else {
            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: userConstants.USER_REGISTER_FAILUR,
                    payload: { message }
                });
            }
       }
    }
}