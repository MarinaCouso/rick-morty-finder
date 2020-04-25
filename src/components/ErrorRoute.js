import React from 'react';
import { Link } from 'react-router-dom';
const ErrorRoute = (props) => {
  return (
    <Link to={`/character/${props.search}`}>
      <p>{`No hay ningún personaje que coincida con la ruta /character/${props.id}`}</p>
    </Link>
  );
};

export default ErrorRoute;
