import { ICredentials } from "../type";

const KEY_PROFILE = "profile";

export const getUserProfile = ()=> localStorage.getItem(KEY_PROFILE) ? JSON.parse(localStorage.getItem(KEY_PROFILE) as string ) as ICredentials: null;
export const setUserProfile = (item:ICredentials)=> localStorage.setItem(KEY_PROFILE,JSON.stringify(item));
export const removeUserProfile = ()=> localStorage.removeItem(KEY_PROFILE);