import React from 'react';

const CharacterDetail = (props) => {
  return (
    <>
      <a className='article__link' href={`'./character/${props.item.id}'`}>
        {'< Volver'}
      </a>
      <article className='article' key={props.item.id}>
        <img className='article__img' src={props.item.image} alt={props.name} title={`picture of ${props.item.name}`}></img>
        <div className='article__text'>
          <h2 className='article__name'>{props.item.name}</h2>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Status:</span> {props.item.status}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Species:</span> {props.item.specie}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Origin:</span> {props.item.origin}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Episodes:</span> {props.item.episodes}
          </p>
        </div>
      </article>
    </>
  );
};

export default CharacterDetail;
