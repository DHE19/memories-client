
import {IAuthState, IAuthActions, ICredentials } from "../../type";


const KEY_PROFILE = "profile";
const data = localStorage.getItem(KEY_PROFILE) ? JSON.parse(localStorage.getItem(KEY_PROFILE ) as string).user as ICredentials : null;
const InitalState:IAuthState = {
    user: data
}


const reducer = (state:IAuthState = InitalState, action:IAuthActions):IAuthState =>{
    switch (action.type){
            case 'LOGIN':
                //guardamos los datos
            localStorage.setItem(KEY_PROFILE, JSON.stringify({...state,user:action.payload as ICredentials}));
            
            return {
               ...state,
                user: action.payload
            }

            case 'LOGOUT':
                    localStorage.removeItem(KEY_PROFILE);
                    
                    return {...state, user: null}   
            case 'SIGNUP':
                localStorage.setItem(KEY_PROFILE, JSON.stringify({...state,user:action.payload as ICredentials}));
                return {
                   ...state,
                    user: action.payload as ICredentials
                }

            default: return state;
        }
} 

export default  reducer;