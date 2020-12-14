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

export const setNotification = notification => {
    return {
      type: 'SET_NOTIFICATION',
      notification,
    }
}


export const deleteNotification = () => {
    return {
      type: 'DELETE_NOTIFICATION',
    }
}
  
  export default notificationReducer