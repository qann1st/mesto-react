import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './popups/ImagePopup';
import PopupEditAvatar from './popups/PopupEditAvatar';
import PopupEditProfile from './popups/PopupEditProfile';
import PopupNewPlace from './popups/PopupNewPlace';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    api.getUserInfo().then((res) => setCurrentUser(res));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="wrapper">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
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
        <ImagePopup card={selectedCard} name={'image'} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
