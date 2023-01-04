import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditProfile({ title, name, isOpen, onClose }) {
  return (
    <PopupWithForm title={title} name={name} isOpen={isOpen} onClose={onClose}>
      <input
        className="popup__input popup__input_type_name"
        name="name"
        id="edit-profile"
        placeholder="Имя"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error edit-profile-error"></span>
      <input
        className="popup__input popup__input_type_about"
        name="about"
        type="text"
        id="about-profile"
        placeholder="О себе"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error about-profile-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
