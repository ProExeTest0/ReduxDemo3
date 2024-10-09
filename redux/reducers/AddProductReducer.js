import {ADD_PRODUCT, ADD_TO_CART_PRODUCT} from '../constant';

// const initialProducts = [];
const initialValues = {
  initialProducts: [],
  initialCart: [],
};

export const AddProductReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...state, initialProducts: action.data};
    case ADD_TO_CART_PRODUCT:
      return {...state, initialCart: action.data};
    default:
      return state;
  }
};
