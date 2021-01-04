import React from 'react'
import { connect } from 'react-redux' 
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, deleteNotification } from '../reducers/notificationReducer'
const AnecdoteForm = ( props ) => {
  // const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // dispatch(createAnecdote(content))
    // dispatch(setNotification(`New anecdote "${content}" created`, 5))
    props.createAnecdote(content)
    props.setNotification(`New anecdote "${content}" created`, 5)
    // dispatch(setNotification(`New anecdote "${content}" created`))
    // setTimeout(() => {
    //     dispatch(deleteNotification())
    //   }, 5000)
  }

  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote"/></div>
      <button>create</button>
    </form>
    </>
  )
}

// export default AnecdoteForm
export default connect(
  null, 
  { createAnecdote, setNotification }
)(AnecdoteForm)