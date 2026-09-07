import React, { useState } from 'react';
import { Camera, Heart, Sparkles, ZoomIn } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function PolaroidModal({ onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      title: "UI/UX Aesthetics Vol 1",
      date: "2026",
      caption: "Glassmorphism & Y2K Color Harmonization",
      bgColor: "linear-gradient(135deg, #fbcfe8, #f472b6)",
      tag: "UI Concept"
    },
    {
      id: 2,
      title: "Hot Mess Typography Poster",
      date: "2026",
      caption: "Editorial Magazine Cover Layout & Photo Collages",
      bgColor: "linear-gradient(135deg, #fda4af, #e11d48)",
      tag: "Branding"
    },
    {
      id: 3,
      title: "3D Shader & Physics Engine",
      date: "2026",
      caption: "WebGL Custom Shaders & Interactive Particles",
      bgColor: "linear-gradient(135deg, #cbd5e1, #64748b)",
      tag: "3D / WebGL"
    },
    {
      id: 4,
      title: "Pink Wednesday Design System",
      date: "2026",
      caption: "Tailored UI Components & Micro-interactions",
      bgColor: "linear-gradient(135deg, #fef08a, #f59e0b)",
      tag: "Design System"
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-3d polaroid-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>

        <div className="polaroid-modal-header">
          <div className="camera-badge">
            <Camera size={22} color="#db2777" />
            <h2>GALERÍA POLAROID</h2>
          </div>
          <p className="polaroid-subtitle">Haz clic en cualquier fotografía para ver detalles</p>
        </div>

        <div className="polaroids-grid">
          {photos.map((p) => (
            <div 
              key={p.id} 
              className="polaroid-card"
              onClick={() => {
                soundManager.playPop();
                setSelectedPhoto(p);
              }}
            >
              <div className="polaroid-photo-frame" style={{ background: p.bgColor }}>
                <div className="photo-inner-art">
                  <Sparkles size={28} color="white" />
                  <span>{p.tag}</span>
                </div>
                <div className="polaroid-overlay-hover">
                  <ZoomIn size={24} color="white" />
                </div>
              </div>
              <div className="polaroid-caption">
                <p className="polaroid-title">{p.title}</p>
                <div className="polaroid-meta">
                  <span>{p.date}</span>
                  <Heart size={14} color="#ec4899" fill="#ec4899" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Photo Modal View */}
        {selectedPhoto && (
          <div className="photo-detail-view" onClick={() => setSelectedPhoto(null)}>
            <div className="detail-card-frame" onClick={(e) => e.stopPropagation()}>
              <div className="detail-photo" style={{ background: selectedPhoto.bgColor }}>
                <Sparkles size={48} color="white" />
              </div>
              <div className="detail-info">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.caption}</p>
                <span className="tag-pill">{selectedPhoto.tag}</span>
                <button className="close-detail-btn" onClick={() => setSelectedPhoto(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
