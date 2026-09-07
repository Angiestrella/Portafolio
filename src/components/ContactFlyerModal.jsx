import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, Heart, Sparkles, SendHorizontal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function ContactFlyerModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "contacto@portafolio.dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    soundManager.playPop();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playPop();
    setSubmitted(true);

    // Cute celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fbcfe8', '#be185d']
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-3d flyer-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>

        <div className="flyer-card-paper">
          <div className="flyer-pin-top"></div>

          <div className="flyer-header">
            <span className="flyer-sub">WORK WITH ME ✨</span>
            <h2>CONTACTO & REDES</h2>
            <p>¡Hablemos sobre tu próximo proyecto web o idea creativa!</p>
          </div>

          <div className="contact-quick-box">
            <div className="email-display">
              <Mail size={18} color="#db2777" />
              <span>{email}</span>
            </div>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
              {copied ? "¡Copiado!" : "Copiar Email"}
            </button>
          </div>

          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Tu Nombre</label>
                <input 
                  type="text" 
                  placeholder="ej. María López" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Tu Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea 
                  rows={4} 
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <button type="submit" className="submit-flyer-btn">
                <SendHorizontal size={18} /> Enviar Mensaje
              </button>
            </form>
          ) : (
            <div className="success-message-box">
              <Sparkles size={40} color="#ec4899" />
              <h3>¡Mensaje Recibido! 🌸</h3>
              <p>Gracias por escribirme. Me pondré en contacto contigo lo antes posible.</p>
              <button className="submit-flyer-btn" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </button>
            </div>
          )}

          {/* Tear-off Strips at bottom */}
          <div className="flyer-tear-strips-footer">
            <div className="tear-tab"><MessageSquare size={12} /> Telegram</div>
            <div className="tear-tab"><Heart size={12} /> Instagram</div>
            <div className="tear-tab"><Sparkles size={12} /> LinkedIn</div>
            <div className="tear-tab"><Mail size={12} /> GitHub</div>
          </div>

        </div>
      </div>
    </div>
  );
}
