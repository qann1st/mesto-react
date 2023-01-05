import React from 'react';

function ImagePopup({ card, onClose }) {
  React.useEffect(
    function handleEscClick() {
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      });
    },
    [onClose],
  );

  function handleClickOnOverlayOrClose() {
    onClose();
  }

  return (
    <div className={`popup popup_dark popup-image ${card !== '' ? 'popup_opened' : ''}`}>
      <div className="popup__wrapper" onClick={() => handleClickOnOverlayOrClose()}></div>
      <div className="popup__image-view">
        <button
          type="button"
          className="popup__close-btn"
          onClick={() => handleClickOnOverlayOrClose()}></button>
        <img className="popup__image" src={card.link} />
        <p className="popup__img-caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
