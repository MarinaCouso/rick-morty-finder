import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log(props);
  return (
    <ul className='list'>
      {/* {props.filteredItems.map((item) => (
        <li className='item' key={item.id}>
          <img className='item__img' src={item.image} alt={item.name} title={`picture of ${item.name}`}></img>
          <div className='item__text'>
            <h2 className='item__name'>{item.name}</h2>
            <p className='item__attribute'>{item.specie}</p>
          </div>
        </li>
      ))} */}
      <CharacterCard filteredItems={props.filteredItems} />
    </ul>
  );
};

export default CharacterList;
