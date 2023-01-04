import React from 'react';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar" onClick={() => onEditAvatar()}>
          <div className="profile__avatar_edit"></div>
          <img
            className="profile__avatar_img"
            alt="Фото профиля"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">жакивкуста</h1>
          <button className="profile__edit-button" onClick={() => onEditProfile()}></button>
          <p className="profile__description">иследаватель акианав</p>
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
