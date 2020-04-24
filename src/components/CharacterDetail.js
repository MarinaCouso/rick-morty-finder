import React from 'react';

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <>
      <a className='article__link' href={`'./character/${props.character.id}'`}>
        {'< Volver'}
      </a>
      <article className='article' key={props.character.id}>
        <img className='article__img' src={props.character.image} alt={props.character.name} title={`picture of ${props.character.name}`}></img>
        <div className='article__text'>
          <h2 className='article__name'>{props.character.name}</h2>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Status:</span> {props.character.status}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Species:</span> {props.character.specie}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Origin:</span> {props.character.origin}
          </p>
          <p className='article__attribute'>
            <span className='article__attribute__bold'>Episodes:</span> {props.character.episodes}
          </p>
        </div>
      </article>
    </>
  );
};

export default CharacterDetail;
