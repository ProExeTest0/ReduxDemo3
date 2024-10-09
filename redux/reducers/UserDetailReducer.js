import {USER_DETAILS} from '../constant';

const initialValues = {
  initialUsers: {},
};

export const UserDetailReducer = (state = initialValues, action) => {
  switch (action.type) {
    case USER_DETAILS:
      //   console.log(action.data, '_{_{_{_{__{_{_{_{__{_{_{_{_');
      return {...state, initialUsers: action.data};
    default:
      return state;
  }
};
