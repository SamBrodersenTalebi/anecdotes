import React from 'react';
import { Fragment } from 'react';
import { Voteincrement } from '../reducers/anecdoteReducer';
import {
  addNotification,
  removeNotification,
} from '../reducers/notificationReducer';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './Notification';

const AnecdoteList = () => {
  //Sort by higest number of votes
  const anecdotes = useSelector((state) => state.anecdotes).sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(Voteincrement(id));
    //find the voted anecdote
    const anecdote = anecdotes.find((x) => x.id === id);
    //set notification
    const content = `you voted '${anecdote.content}'`;
    dispatch(addNotification(content));
    setTimeout(() => dispatch(removeNotification()), 3000);
  };
  return (
    <Fragment>
      <Notification />
      {anecdotes.map((anecdote) => (
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

export default AnecdoteList;
