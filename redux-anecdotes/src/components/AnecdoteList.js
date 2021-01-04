import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
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


const AnecdoteList = ( props ) => {

  const onVote = (anecdote) => { 
    props.voteTo(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return(
    <ul>
      {/* {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote => */}
      {props.anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
         key={anecdote.id}
         anecdote={anecdote}
          handleClick={() => onVote(anecdote)}
        />
      )}
    </ul>
  )
}



const mapStateToProps = (state) => {
  if (state.filter === "") {
    return {
      anecdotes: state.anecdotes
    }
  }
  return {anecdotes: state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))}
}

const mapDispatchToProps = {
  voteTo,
  setNotification
}

const ConnectedNotes = connect(mapStateToProps, 
  mapDispatchToProps)(AnecdoteList)
export default ConnectedNotes