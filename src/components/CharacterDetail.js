import React from 'react';

const CharacterDetail = (props) => {
  return (
    <div className='article__box'>
      <a className='article__link' href={`'./character/${props.character.id}'`}>
        {'< Volver'}
      </a>
      <article className='article' key={props.character.id}>
        <img className='article__img' src={props.character.image} alt={props.character.name} title={`picture of ${props.character.name}`}></img>
        <div className='article__text'>
          <h2 className='article__name'>{props.character.name}</h2>
          <p className='article__attribute'>
            <span className='article__attribute__title'>Status:</span> {props.character.status}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__title'>Species:</span> {props.character.specie}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__title'>Origin:</span> {props.character.origin}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__title'>Episodes:</span> {props.character.episodes}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CharacterDetail;
