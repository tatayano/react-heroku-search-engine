const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return Object.assign({}, state, action.payload);
    case 'CHANGE_NAME':
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default user;