import React from 'react';
import CharacterCard from './CharacterCard';
import ErrorSearch from './ErrorSearch';

const CharacterList = (props) => {
  debugger;
  console.log(props);
  const errorSearch = props.filteredItems.length === 0 ? <ErrorSearch search={props.search} /> : '';

  return (
    <>
      {errorSearch}
      <ul className='list'>
        <CharacterCard filteredItems={props.filteredItems} />
      </ul>
    </>
  );
};

export default CharacterList;
