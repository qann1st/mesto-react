import React from 'react';

function ImagePopup() {
  return (
    <div class="popup popup_dark popup-image">
      <div class="popup__image-view">
        <button type="button" class="popup__close-btn" title="Закрыть"></button>
        <img class="popup__image" alt="" />
        <p class="popup__img-caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
