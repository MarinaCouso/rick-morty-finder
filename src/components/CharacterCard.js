import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return props.filteredItems.map((item) => (
    <li className='item' key={item.id}>
      <Link className='item__link' to={`/character/${item.id}`}>
        <img className='item__img' src={item.image} alt={item.name} title={`picture of ${item.name}`}></img>
        <div className='item__text'>
          <h2 className='item__name'>{item.name}</h2>
          <p className='item__attribute'>{item.specie}</p>
        </div>
      </Link>
    </li>
  ));
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
};
export default CharacterCard;
