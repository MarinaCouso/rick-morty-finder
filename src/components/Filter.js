import React from 'react';
import PropTypes from 'prop-types';
const Filter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    let value = ev.target.value;
    props.handleFilter(value);
  };
  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };
  return (
    <form className='form'>
      <label htmlFor='search'></label>
      <input className='form__input' type='text' name='search' value={props.search} onChange={handleChange} onKeyDown={handleKeyDown}></input>
    </form>
  );
};
Filter.propTypes = { search: PropTypes.string };
export default Filter;
