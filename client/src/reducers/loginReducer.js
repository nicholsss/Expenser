import loginService from '../services/login'

const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;

    default:
      return state;
  }
};

export const loginUser =(username, password) => {

    return async dispatch => {
        const data = await loginService.login(username, password)

        dispatch({
            data,
            dispatch:'LOGIN'
        })
    }
}

export default reducer
