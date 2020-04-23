import React from 'react';

const CharacterDetail = (props) => {
  console.log(props);
  return props.filteredItems.map((item) => (
    <article className='article' key={item.id}>
      <img className='article__img' src={item.image} alt={item.name} title={`picture of ${item.name}`}></img>
      <div className='article__text'>
        <h2 className='article__name'>{item.name}</h2>
        <p className='article__attribute'>Status: {item.status}</p>
        <p className='article__attribute'>Species: {item.specie}</p>
        <p className='article__attribute'>Origin: {item.origin}</p>
        <p className='article__attribute'>Episodes: {item.episodes}</p>
      </div>
    </article>
  ));
};

export default CharacterDetail;
