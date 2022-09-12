import { actionType } from "../actionType/actionTypes"


export const galeryAdd = (data)  =>{
    return{
        type:actionType.galeryAdd,
        payload:data
    }
}
export const galeryEdit = (edit)  =>{
    return{
        type:actionType.galeryEdit,
        payload:edit
    }
}
export const galeryDelete = (id)  =>{
    return{
        type:actionType.galeryDelete,
        payload:id
    }
}

export const menuToggle = ()  =>{
    return{
        type:actionType.menu,
    }
}
