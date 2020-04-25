import React from 'react';

const ErrorRoute = (props) => {
  return (
    <>
      <p>{`No hay ningún personaje que coincida con la ruta /character/${props.id}`}</p>
      <a className='article__link' href='/'>
        {'< Volver'}
      </a>
    </>
  );
};

export default ErrorRoute;
