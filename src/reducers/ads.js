const ads = (state = [], action) => {
  switch (action.type) {
    case 'GET_ADS':
      return Object.assign({}, state, action.payload);
    case 'SAVE_ADS':
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default ads;