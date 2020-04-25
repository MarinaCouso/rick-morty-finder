import React from 'react';
import { Link } from 'react-router-dom';
const Error = (props) => {
  console.log(props.search);
  return (
    <Link to={`/character/${props.search}`}>
      <p>{`No hay ningún personaje que coincida con ${props.search}`}</p>
    </Link>
  );
};

export default Error;
