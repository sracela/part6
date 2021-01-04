import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import ConnectedNotes from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  },[dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <ConnectedNotes />
      <AnecdoteForm />
    </div>
  )
}

export default App