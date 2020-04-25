import React from 'react';

const ErrorSearch = (props) => {
  return (
    <>
      <p>{`No hay ningún personaje que coincida con ${props.search}`}</p>
      <a className='article__link' href='/'>
        {'< Volver'}
      </a>
    </>
  );
};

export default ErrorSearch;
