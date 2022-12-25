import * as api from '../../api';

import { DispatchAuthType, IAuthActions, IUserLogin, IUserRegister } from "../../type"

export const logIn = (user:IUserLogin,callback:Function) => async (dispatch:DispatchAuthType) =>{
    
    try {
        const {data} = await api.logIn(user);

        
        dispatch({
                    type: 'LOGIN',
                    payload: {result:data.result, token:data.token}
                });
        callback();
    } catch (error:any) {
            console.log(error);               
    }
    
}


export const signUp = (user:IUserRegister, callback:Function) => async (dispatch:DispatchAuthType) =>{
    try {
        
        const {data} = await api.signUp(user);
        console.log('estos son los datos del usuario ',data.result);
        dispatch({
            type: 'SIGNUP',
            payload: {result:data.result, token:data.token}
        });
        callback();
    } catch (error) {
        console.log('occured exception',error);
    }
        
}


export const logOut = ():IAuthActions => {
    console.log('cerrand sessión');
        
    return{type: 'LOGOUT', payload:null};
}