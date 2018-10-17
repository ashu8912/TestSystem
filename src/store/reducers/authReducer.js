import * as actionTypes from '../actions/actionTypes/authActionTypes';
export const authReducer=(state={
    token:null,
    isLoading:false,
    error:null,
    isAdmin:false,
    isStudent:false,
    isSuperAdmin:false
},action)=>{
    switch(action.type)
    {
    case actionTypes.AUTH_START:
    return {...state,isLoading:true}
    case actionTypes.AUTH_SUCCESS:
    let isAuthStatus={isSuperAdmin:false,isAdmin:false,isStudent:false};
    console.log(action.payload)

    switch(action.payload.role)
    {
        case 'superadmin':
        isAuthStatus.isSuperAdmin=true;
        break;
        default:
        isAuthStatus={};
    }
    console.log(isAuthStatus);
    return {isLoading:false,error:null,
        sessionId:action.payload.sessionId,
        ...isAuthStatus,
    name:action.payload.name}
    case actionTypes.AUTH_FAIL:
    return {...state,
        isLoading:false,error:action.payload.error}
    }
return state;
}