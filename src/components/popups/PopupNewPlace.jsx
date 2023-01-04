import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupNewPlace({ title, name, isOpen }) {
  return (
    <PopupWithForm title={title} name={name} isOpen={isOpen}>
      <input
        className="popup__input popup__input_type_name"
        placeholder="Название"
        type="text"
        name="name"
        required
        minLength="2"
        maxLength="30"
        id="add-name-input"
      />
      <span className="popup__input-error add-name-input-error"></span>
      <input
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        type="url"
        name="link"
        required
        id="add-link-input"
      />
      <span className="popup__input-error add-link-input-error"></span>
    </PopupWithForm>
  );
}

export default PopupNewPlace;
