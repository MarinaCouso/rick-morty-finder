import React from 'react';

const ErrorRoute = (props) => {
  return (
    <div className='error'>
      <p className='error__text'>{`No hay ningún personaje que coincida con la ruta /character/${props.id}`}</p>
      <a className='error__link' href='/'>
        {'< Volver'}
      </a>
    </div>
  );
};

export default ErrorRoute;
