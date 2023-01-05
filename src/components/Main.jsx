import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.jsx';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userAbout, setUserAbout] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
      setUserName(user.name);
      setUserAbout(user.about);
      setUserAvatar(user.avatar);
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar" onClick={() => onEditAvatar()}>
          <div className="profile__avatar_edit"></div>
          <img className="profile__avatar_img" alt="Фото профиля" src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" onClick={() => onEditProfile()}></button>
          <p className="profile__description">{userAbout}</p>
        </div>
        <button className="profile__add-button" onClick={() => onAddPlace()}></button>
      </div>
      <section>
        <ul className="elements">
          {cards.map((item) => (
            <Card item={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
