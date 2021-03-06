import { Fragment } from 'react';
import React from 'react';
//import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch();

  const create = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    //dispatch(createAnecdote(content));
    props.createAnecdote(content);
    const notificationContent = `you have created '${content}'`;
    //dispatch(setNotification(notificationContent, 2));
    props.setNotification(notificationContent);
  };

  return (
    <Fragment>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </Fragment>
  );
};

export default connect(null, { createAnecdote, setNotification })(AnecdoteForm);
