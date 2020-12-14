
import { createStore, combineReducers  } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  })
  
const store = createStore(
    reducer,
    composeWithDevTools()
)

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(setNotification('Hola hola'))

// setTimeout(() => {
//     store.dispatch(deleteNotification())
//   }, 5000)

export default store