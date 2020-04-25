import React from 'react';

const ErrorSearch = (props) => {
  return (
    <div className='error'>
      <p className='error__text'>{`No hay ningún personaje que coincida con ${props.search}`}</p>
      <a className='error__link' href='/'>
        {'< Volver'}
      </a>
    </div>
  );
};

export default ErrorSearch;
