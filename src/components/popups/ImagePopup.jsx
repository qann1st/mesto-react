import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup-photo">
      <div className="popup__wrapper"></div>
      <div className="popup__image-all">
        <button className="popup__close"></button>
        <img className="popup__image" alt="" src="" />
        <p className="popup__image-description"></p>
      </div>
    </section>
  );
}

export default ImagePopup;
