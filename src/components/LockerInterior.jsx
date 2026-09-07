import React from 'react';
import { soundManager } from '../utils/audio';

export default function LockerInterior({ onOpenItem }) {
  
  const handleItemClick = (itemKey) => {
    soundManager.playPop();
    onOpenItem(itemKey);
  };

  return (
    <div className="locker-interior">
      
      {/* Upper Shelf Area (Image 2) */}
      <div className="shelf-top-zone">
        
        {/* Wall Flyer on Back Wall (Image 2) */}
        <div 
          className="wall-flyer interactive-item"
          onClick={() => handleItemClick('flyer')}
          title="Ver Volante de Contacto"
        >
          <div className="flyer-pin-badge">CEO MOOD</div>
          <div className="flyer-text-russian">
            hablemos de proyectos en telegram / correo
          </div>
          <div className="tear-strips">
            <span className="tear-strip">contacto</span>
            <span className="tear-strip">telegram</span>
            <span className="tear-strip">sociales</span>
            <span className="tear-strip">email</span>
          </div>
        </div>

        {/* Stacked Books on Top Shelf Surface (Image 2) */}
        <div 
          className="books-stack interactive-item"
          onClick={() => handleItemClick('books')}
          title="Abrir Libros (Proyectos & Bio)"
        >
          <div className="book-spine book-spine-1">
            <span>pinrecipe</span>
            <span>01</span>
          </div>
          <div className="book-spine book-spine-2">
            <span>02</span>
            <span>pinformat</span>
          </div>
          <div className="book-spine book-spine-3">
            <span>pintrends</span>
            <span>03</span>
          </div>
          <div className="book-spine book-spine-4">
            <span>04</span>
            <span>telegram / bio</span>
          </div>
        </div>

      </div>

      {/* Shelf Divider Beam */}
      <div className="shelf-divider"></div>

      {/* Bottom Shelf Area (Image 2) */}
      <div className="shelf-bottom-zone">
        
        {/* White Luxury Handbag Leaning Left */}
        <div 
          className="bag-luxury-item interactive-item"
          onClick={() => handleItemClick('laptop')}
          title="Ver Accesorios & Bag"
        >
          <div className="bag-handle-ring"></div>
        </div>

        {/* Laptop Screen in Background with WTF? Sticker */}
        <div 
          className="laptop-back-display interactive-item"
          onClick={() => handleItemClick('laptop')}
          title="Abrir Laptop & Dashboard de Skills"
        >
          <div className="wtf-sticker">WTF?</div>
        </div>

        {/* Retro Compact Pink Camera Right */}
        <div 
          className="camera-retro-pink interactive-item"
          onClick={() => handleItemClick('camera')}
          title="Ver Galería Polaroid"
        >
          <div className="camera-flash-light"></div>
          <div className="camera-lens-ring"></div>
        </div>

        {/* Foreground Polaroid Cutout & Accessories (Image 2) */}
        <div 
          className="polaroid-front-photo interactive-item"
          onClick={() => handleItemClick('camera')}
          title="Ver Foto Polaroid"
        >
          <div className="polaroid-front-img">
            👩‍💻
          </div>
        </div>

      </div>

    </div>
  );
}
