
import {IAuthState, IAuthActions, ICredentials } from "../../type";
import { getUserProfile, removeUserProfile, setUserProfile } from "../../utils/localStore";


const InitalState:IAuthState = {
    user: getUserProfile()
}


const reducer = (state:IAuthState = InitalState, action:IAuthActions):IAuthState =>{
    switch (action.type){
            case 'LOGIN':
                //guardamos los datos
            setUserProfile(action.payload as ICredentials);
            return {
               ...state,
                user: action.payload
            }

            case 'LOGOUT':
                    removeUserProfile();
                    return {...state, user: null}   
            case 'SIGNUP':
                setUserProfile(action.payload as ICredentials);
                return {
                   ...state,
                    user: action.payload as ICredentials
                }

            default: return state;
        }
} 

export default  reducer;