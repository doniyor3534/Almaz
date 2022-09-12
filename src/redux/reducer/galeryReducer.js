import { actionType } from "../actionType/actionTypes";

const initialValues = {
  galery: [],
  menu:false
};

export const galeryReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case actionType.galeryAdd:
      return {
        ...state,
        galery: [...state.galery, payload],
      };
    case actionType.galeryEdit:
      return {
        ...state,
        galery: state.galery.map((val) => (val.id === payload.id ? payload : val)),
      };

    case actionType.galeryDelete:
      return {
        ...state,
        galery: state.galery.filter((val) => val.id !== payload),
      };
      case actionType.menu:
        return {
          ...state,
          menu: !state.menu,
        };
    default:
      return state;
  }
};
