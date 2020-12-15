const initialState = 'NONE'

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.notification
    case 'DELETE_NOTIFICATION':
        return initialState
      default:
        return state
    }
  }

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    await timeout(time*1000)
    dispatch({
      type: 'DELETE_NOTIFICATION',
      notification,
    })
  }
}


// export const deleteNotification = () => {
//     return {
//       type: 'DELETE_NOTIFICATION',
//     }
// }
  
  export default notificationReducer