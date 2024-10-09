import {ADD_PRODUCT, ADD_TO_CART_PRODUCT} from '../constant';

export const AddProductAction = item => {
  return function (dispatch, getState) {
    // const temp = [...getState().AddProductReducer, item];
    // dispatch(addProduct(temp));

    const temp = [...getState().AddProductReducer.initialProducts, item];
    dispatch(addProduct(temp));
  };
};

export const RemoveProductAction = index => {
  return function (dispatch, getState) {
    const temp = getState().AddProductReducer.initialProducts.filter(
      (val, indx) => {
        // console.log(getState(), '==================');
        if (indx !== index) {
          return val;
        }
      },
    );
    dispatch(addProduct(temp));
  };
};

export const EditProductAction = (item, index) => {
  return function (dispatch, getState) {
    const temp = getState().AddProductReducer.initialProducts.map(
      (val, indx) => {
        if (index === indx) {
          return item;
        } else {
          return val;
        }
      },
    );

    dispatch(addProduct(temp));
  };
};

//   ***************** Cart Reducer *****************
export const AddToCartAction = item => {
  return function (dispatch, getState) {
    const temp = [
      ...getState().AddProductReducer.initialCart,
      {...item, quantity: 1},
    ];
    dispatch(addCartProduct(temp));
  };
};

export const RemoveCartProductAction = index => {
  return function (dispatch, getState) {
    const temp = getState().AddProductReducer.initialCart.filter(
      (val, indx) => {
        if (indx !== index) {
          return val;
        }
      },
    );
    dispatch(addCartProduct(temp));
  };
};

export const EditCartProductAction = (index, op) => {
  return function (dispatch, getState) {
    if (op === 0) {
      dispatch(RemoveCartProductAction(index));
    } else {
      const temp = getState().AddProductReducer.initialCart.map((val, indx) => {
        if (index === indx) {
          return {...val, quantity: op};
        }
        return val;
      });
      dispatch(addCartProduct(temp));
    }
  };
};

export const addProduct = item => {
  return {
    type: ADD_PRODUCT,
    data: item,
  };
};

export const addCartProduct = item => {
  return {
    type: ADD_TO_CART_PRODUCT,
    data: item,
  };
};
