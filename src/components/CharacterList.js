import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  return (
    <ul className='list'>
      <CharacterCard filteredItems={props.filteredItems} />
    </ul>
  );
};

export default CharacterList;
