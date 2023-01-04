import React from 'react';
import { api } from '../utils/Api.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState();
  const [userAbout, setUserAbout] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserAbout(res.about);
      setUserAvatar(res.avatar);
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
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
