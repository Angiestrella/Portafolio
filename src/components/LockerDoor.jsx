import React from 'react';
import { soundManager } from '../utils/audio';
import portfolioImage from '../../portafolio.jpg';

export default function LockerDoor({ isOpen, onToggleDoor, onOpenPoster }) {
  const handleLatchClick = (e) => {
    e.stopPropagation();
    soundManager.playLatchClick();
    soundManager.playDoorSwing();
    onToggleDoor();
  };

  const handlePosterClick = (e) => {
    e.stopPropagation();
    soundManager.playPop();
    onOpenPoster();
  };

  return (
    <div className={`locker-door ${isOpen ? 'open' : ''}`} onClick={handleLatchClick}>
      
      {/* Top Number Plate Badge `# 80` */}
      <div className="door-header-louver">
        <div className="number-plate-80">
          <span className="rivet-dot"></span>
          <span>80</span>
          <span className="rivet-dot"></span>
        </div>
      </div>

      {/* Recessed Silver Lock Handle Box (Edge of door) */}
      <div className="metallic-handle-box" onClick={handleLatchClick} title="Haz clic en la manija para abrir/cerrar la puerta">
        <div className="handle-recess"></div>
      </div>

      {/* Decorative Stickers */}
      <div className="sticker-speech-bubble" onClick={handlePosterClick}>
        the new plastics??
      </div>

      <div className="sticker-wednesdays-note" onClick={handlePosterClick}>
        <span className="sticker-red-crystal-heart">❤️</span>
        wear Pink on WEDNESDAYS!!
        <div style={{ fontSize: '0.62rem', fontWeight: '500', marginTop: '4px', color: '#475569', textTransform: 'none' }}>
          pink skirts, pants, tops, accessories and other pink things.
        </div>
      </div>

      {/* Main "PORTAFOLIO" High-Fashion Poster Collage -> Click opens Pop-Up! */}
      <div 
        className="poster-container interactive-item" 
        onClick={handlePosterClick}
        title="Toca para abrir el póster en un pop-up en primer plano"
      >
        <div className="frosted-tape-strip left"></div>
        <div className="frosted-tape-strip right"></div>

        <span className="poster-header-tag">DESARROLLO & CREACIÓN</span>
        
        <h1 className="poster-title-hotmess">
          PORTA<br/>FOLIO
          <span className="lipstick-kiss-stamp">💋</span>
        </h1>

        <div className="circled-caption-oval">
          "I can take you to my world"
        </div>

        {/* Central Photo Collage Frame */}
        <div className="poster-photo-cutout-frame">
          <img src={portfolioImage} alt="Mi portafolio" className="poster-portfolio-image" />
        </div>

        <div className="poster-members-line">
          CREATIVE • DESIGNER • DEVELOPER • ARTIST
        </div>

        {/* Bottom Film Strip of 4 Mini Polaroid Prints */}
        <div className="poster-film-four-strip">
          <div className="film-mini-photo">🌸</div>
          <div className="film-mini-photo">💖</div>
          <div className="film-mini-photo">✨</div>
          <div className="film-mini-photo">🎨</div>
        </div>
      </div>

      {/* Bottom Stickers */}
      <div className="sticker-glitter-heart-left">💖</div>
      <div className="sticker-glitter-heart-right">❤️</div>
      <div className="sticker-daisy-flower">🌼</div>

    </div>
  );
}
