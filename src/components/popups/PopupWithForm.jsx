import React from 'react';
import Popup from './Popup';

function PopupWithForm({ children, title, name, isOpen, onClose }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form name="add" className="popup__form popup__form_type_add" noValidate>
        {children}
        <button type="submit" className="popup__save-btn">
          Сохранить
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
