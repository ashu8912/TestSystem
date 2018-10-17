import axios from 'axios';
import * as actionTypes from '../actionTypes/authActionTypes';

export const authStart=()=>{
return {type:actionTypes.AUTH_START}
}
export const authSuccess=(profile)=>{
    console.log(profile);
    return {type:actionTypes.AUTH_SUCCESS,payload:{
role:profile.profile.role,
name:profile.profile.name,
sessionId:profile.profile.sessionId
}}
}
export const authFail=()=>{
return {type:actionTypes.AUTH_FAIL}
}
export const auth=(postObject,url)=>(dispatch)=>{
    console.log(postObject);
    dispatch(authStart());
axios.post("/users/login",postObject).then((response)=>{
        dispatch(authSuccess(response.data.data))
}).catch((err)=>{
    console.log(err);
})
}