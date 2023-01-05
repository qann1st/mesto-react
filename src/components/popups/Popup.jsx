import React from 'react';

function Popup({ children, name, isOpen, onClose }) {
  React.useEffect(
    function handleEscClick() {
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      });
    },
    [isOpen, onClose],
  );

  function handleClickOnOverlayOrClose() {
    onClose();
  }

  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__wrapper" onClick={() => handleClickOnOverlayOrClose()}></div>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          onClick={() => handleClickOnOverlayOrClose()}></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
