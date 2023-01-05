import React from 'react';

function Card({ item, onCardClick }) {
  function handleClick() {
    onCardClick(item);
  }

  return (
    <li className="element">
      <div className="element__image-wrapper">
        <button className="element__delete"></button>
        <img className="element__image" alt="" src={item.link} onClick={() => handleClick()} />
      </div>
      <div className="element__description">
        <h2 className="element__title">{item.name}</h2>
        <div className="element__like_container">
          <button className="element__like"></button>
          <span className="element__like_count">{item.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
