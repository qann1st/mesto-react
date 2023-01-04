import React from 'react';

function Popup({ children, name, isOpen }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn" title="Закрыть"></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
