import React from 'react';

const CharacterDetail = (props) => {
  return (
    <>
      <a className='article__link' href={`'./character/${props.filteredItems.id}'`}>
        {'< Volver'}
      </a>
      <article className='article' key={props.filteredItems.id}>
        <img className='article__img' src={props.filteredItems.image} alt={props.filteredItems.name} title={`picture of ${props.filteredItems.name}`}></img>
        <div className='article__text'>
          <h2 className='article__name'>{props.filteredItems.name}</h2>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Status:</span> {props.filteredItems.status}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Species:</span> {props.filteredItems.specie}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Origin:</span> {props.filteredItems.origin}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Episodes:</span> {props.filteredItems.episodes}
          </p>
        </div>
      </article>
    </>
  );
};

export default CharacterDetail;
