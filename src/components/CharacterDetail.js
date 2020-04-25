import React from 'react';
import PropTypes from 'prop-types';
import alive from '../images/alive.svg';
import dead from '../images/dead.svg';
import question from '../images/question.svg';
const CharacterDetail = (props) => {
  let icon = '';
  const getIcon = () => {
    if (props.character.status === 'Alive') {
      return (icon = alive);
    } else if (props.character.status === 'Dead') {
      return (icon = dead);
    } else {
      return (icon = question);
    }
  };
  getIcon(props);

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
            <span className='article__attribute__title'>Status:</span> {props.character.status} <img className='article__attribute__icon' src={icon} alt='status'></img>
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
CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};
export default CharacterDetail;
