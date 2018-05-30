export const getUser = id => ({
  type: 'GET_USER',
  id
})

export const changeUser = text => ({
  type: 'CHANGE_NAME',
  text
})