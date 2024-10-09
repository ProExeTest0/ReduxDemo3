import {USER_DETAILS} from '../constant';

export const GetUserDetailAPI = () => {
  return async function (dispatch, getState) {
    const url = 'https://dummyjson.com/users';
    let result = await fetch(url);
    result = await result.json();
    // console.log(result, '----------------------------');
    dispatch(saveUserDetail(result));
  };
};

export const saveUserDetail = item => {
  return {
    type: USER_DETAILS,
    data: item,
  };
};
