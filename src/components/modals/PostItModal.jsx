import React from 'react';
import { X, Quote, Heart } from 'lucide-react';

export default function PostItModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container postit-enlarged-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-x-btn dark-close" onClick={onClose}><X size={18} /></button>

        <div className="postit-yellow-paper">
          <div className="postit-pin">📌</div>
          <Quote size={32} className="quote-watermark" />
          
          <h3 className="postit-quote">
            "El buen diseño no solo se ve bien, se siente intuitivo y transforma la empatía en experiencias memorables."
          </h3>

          <div className="postit-footer">
            <Heart size={16} fill="#f43f5e" color="#f43f5e" />
            <span>— Mi Filosofía como Diseñadora</span>
          </div>
        </div>

      </div>
    </div>
  );
}
