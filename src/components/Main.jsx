import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = React.useState([]);

  const userContext = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar" onClick={() => onEditAvatar()}>
          <div className="profile__avatar_edit"></div>
          <img className="profile__avatar_img" alt="Фото профиля" src={userContext?.avatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userContext?.name}</h1>
          <button className="profile__edit-button" onClick={() => onEditProfile()}></button>
          <p className="profile__description">{userContext?.about}</p>
        </div>
        <button className="profile__add-button" onClick={() => onAddPlace()}></button>
      </div>
      <section>
        <ul className="elements">
          {cards.map((item) => (
            <Card item={item} onCardClick={onCardClick} key={item._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
