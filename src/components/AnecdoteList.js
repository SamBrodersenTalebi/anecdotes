import React from 'react';
import { Fragment } from 'react';
import { Voteincrement } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { useSelector, useDispatch } from 'react-redux';
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
  */
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    //find the voted anecdote
    const anecdote = props.anecdotes.find((x) => x.id === id);
    dispatch(Voteincrement(id, anecdote));
    //set notification
    const content = `you voted '${anecdote.content}'`;
    dispatch(setNotification(content, 3));
  };

  const anecdotesToShow = () => {
    //get anecdotes with props
    let anecdotes = props.anecdotes;
    anecdotes
      .sort((a, b) => (a.votes > b.votes ? -1 : 1))
      .filter((string) => string.content.includes(props.filter));
    return anecdotes;
  };
  return (
    <Fragment>
      <Notification />
      {anecdotesToShow().map((anecdote) => (
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
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};
const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList);
export default ConnectedAnecdotes;
