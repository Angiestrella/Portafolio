import React from 'react';
import { Sparkles, Heart, ExternalLink, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';
import portfolioImage from '../portafolio.jpg';

export default function PosterModal({ onClose, onOpenItem }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-3d flyer-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>

        <div className="flyer-card-paper">
          <div className="flyer-header">
            <span className="flyer-sub">PORTAFOLIO DE PRESENTACIÓN 💋</span>
            <h2>BIENVENIDO A MI MUNDO CREATIVO</h2>
            <p>"I can take you to my world"</p>
          </div>

          <div className="poster-photo-cutout-frame" style={{ height: '180px', margin: '0.8rem 0' }}>
            <img src={portfolioImage} alt="Mi portafolio" className="poster-portfolio-image" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', margin: '0.5rem 0' }}>
            <button 
              className="submit-flyer-btn" 
              style={{ background: 'linear-gradient(135deg, #facc15, #eab308)', color: '#713f12' }}
              onClick={() => { soundManager.playPop(); onOpenItem('books'); }}
            >
              📕 Abrir Libro de Proyectos
            </button>

            <button 
              className="submit-flyer-btn" 
              style={{ background: 'linear-gradient(135deg, #f472b6, #ec4899)' }}
              onClick={() => { soundManager.playPop(); onOpenItem('camera'); }}
            >
              📸 Abrir Galería Polaroid
            </button>

            <button 
              className="submit-flyer-btn" 
              style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}
              onClick={() => { soundManager.playPop(); onOpenItem('laptop'); }}
            >
              💻 Abrir Laptop & Skills
            </button>

            <button 
              className="submit-flyer-btn" 
              style={{ background: 'linear-gradient(135deg, #be185d, #9d174d)' }}
              onClick={() => { soundManager.playPop(); onOpenItem('flyer'); }}
            >
              📝 Ver Volante de Contacto
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
