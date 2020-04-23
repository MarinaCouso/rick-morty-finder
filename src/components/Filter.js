import React from 'react';

const Filter = (props) => {
  let value = '';
  const handleChange = (ev) => {
    ev.preventDefault();
    value = ev.target.value;
    props.handleFilter(value);
  };
  return (
    <form className='form'>
      <label htmlFor='search'></label>
      <input className='form__input' type='text' name='search' onChange={handleChange}></input>
    </form>
  );
};

export default Filter;
