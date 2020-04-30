import React from 'react';
import { Fragment } from 'react';
import { Voteincrement } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
//import { useSelector, useDispatch } from 'react-redux';
import Notification from './Notification';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {
  /*
  //get filter
  const filterValue = useSelector((state) => state.filter);
  //Sort by higest number of votes and filter by the filter in state
  const anecdotes = useSelector((state) => state.anecdotes)
    .sort((a, b) => (a.votes > b.votes ? -1 : 1))
    .filter((str) => str.content.includes(filterValue));
  
  const dispatch = useDispatch();
  */

  const vote = (id) => {
    console.log('vote', id);
    //find the voted anecdote
    const anecdote = props.anecdotes.find((x) => x.id === id);
    props.Voteincrement(id, anecdote);
    //set notification
    const content = `you voted '${anecdote.content}'`;
    props.setNotification(content, 3);
  };

  return (
    <Fragment>
      <Notification />
      {props.anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  //Filter anecdotes by filter string
  let anecdotes = state.anecdotes;
  anecdotes
    .sort((a, b) => (a.votes > b.votes ? -1 : 1))
    .filter((string) => string.content.includes(state.filter));
  return {
    anecdotes,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  setNotification,
  Voteincrement,
};

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdotes;
