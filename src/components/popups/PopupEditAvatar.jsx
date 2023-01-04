import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditAvatar({ title, name, isOpen }) {
  return (
    <PopupWithForm title={title} name={name} isOpen={isOpen}>
      <input
        className="popup__input popup__input_type_link"
        name="link"
        type="url"
        id="avatar-link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
