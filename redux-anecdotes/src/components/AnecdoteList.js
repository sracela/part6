import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'
import { setNotification, deleteNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(        
  <div>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
  )
}

const onVote = (dispatch, anecdote) => { 

  dispatch(voteTo(anecdote.id))
  dispatch(setNotification(`You voted "${anecdote.content}"`))
  setTimeout(() => {
      dispatch(deleteNotification())
    }, 5000)
}

const AnecdoteList = () => {
  const dispatch = useDispatch() 
  // const anecdotes = useSelector(state => state.anecdotes)
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if ( filter === '' ) {
      return anecdotes
    }
    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })
  return(
    <ul>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
         key={anecdote.id}
         anecdote={anecdote}
          handleClick={() => onVote(dispatch, anecdote)}
        />
      )}
    </ul>
  )
}

export default AnecdoteList