import React from 'react';
//import { useDispatch } from 'react-redux';
import { filter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {
  //const dispatch = useDispatch();
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const filterValue = event.target.value;
    //dispatch(filter(filterValue));
    props.filter(filterValue);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { filter })(Filter);
