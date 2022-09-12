import { actionType } from "../actionType/actionTypes"

export const userDetil = (data)  =>{
    return{
        type:actionType.user,
        payload:data
    }
}

export const userLogout = ()  =>{
    return{
        type:actionType.logout,
    }
}
// //////////////////////////////Davlatlar
export const DavlatAddFun = (data)  =>{
    return{
        type:actionType.davlatAdd,
        payload:data
    }
}
export const DavlatDelFun = (id)  =>{
    return{
        type:actionType.davlatDelet,
        payload:id
    }
}
export const DavlatEditFun = (val)  =>{
    return{
        type:actionType.davlatEdit,
        payload:val
    }
}


// //////////////////////////////Davlatlar
