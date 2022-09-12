import { actionType } from "../actionType/actionTypes";




const initialValues = {
    user: JSON.parse(localStorage.getItem('profile')) || {},
    davlatlar:JSON.parse(localStorage.getItem('davlatlar'))||[]
};

export const profileReducer = (state = initialValues, { type, payload }) => {
    switch (type) {
        case actionType.user:
            localStorage.setItem('profile', JSON.stringify(payload))
            return {
                ...state,
                user: JSON.parse(localStorage.getItem('profile')) || {},
            };
            case actionType.logout:
                localStorage.removeItem('profile')
                return {
                    ...state,
                    user: JSON.parse(localStorage.getItem('profile')) || {},
                }
            // /////////DavlatPage
             case actionType.davlatAdd:
                localStorage.setItem('davlatlar',JSON.stringify([...state.davlatlar,payload]))  
                return {
                    ...state,
                    davlatlar: JSON.parse(localStorage.getItem('davlatlar')),
                } 
             case actionType.davlatDelet:
                localStorage.setItem('davlatlar',JSON.stringify(state.davlatlar.filter((val)=>val.id !== payload)))  
                return {
                    ...state,
                    davlatlar: JSON.parse(localStorage.getItem('davlatlar')),
                } 
             case actionType.davlatEdit:
                localStorage.setItem('davlatlar',JSON.stringify(state.davlatlar.map((val)=>val.id === payload.id?payload:val)))  
                return {
                    ...state,
                    davlatlar: JSON.parse(localStorage.getItem('davlatlar')),
                } 
            // /////////DavlatPage
        default:
            return state;
    }
};
