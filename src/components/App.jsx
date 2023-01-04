import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupEditAvatar from './popups/PopupEditAvatar';
import PopupEditProfile from './popups/PopupEditProfile';
import PopupNewPlace from './popups/PopupNewPlace';
import PopupWithForm from './popups/PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>
      <PopupEditProfile
        title={'Редактировать профиль'}
        name={'edit-profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupNewPlace
        title={'Новое место'}
        name={'new-place'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        title={'Обновить аватар'}
        name={'edit-avatar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <section className="popup popup-remove">
        <div className="popup__wrapper"></div>
        <div className="popup__container popup__container_remove">
          <button className="popup__close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button" type="submit">
            Да
          </button>
        </div>
      </section>
      <template className="card__template">
        <li className="element">
          <div className="element__image-wrapper">
            <button className="element__delete"></button>
            <img className="element__image" alt="" src="" />
          </div>
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div className="element__like_container">
              <button className="element__like"></button>
              <span className="element__like_count">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
