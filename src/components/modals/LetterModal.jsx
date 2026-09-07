import React, { useState } from 'react';
import { X, Mail, Linkedin, FileText, Send, ExternalLink } from 'lucide-react';

export default function LetterModal({ onClose }) {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const subjectText = formData.get('subject');
    const message = formData.get('message');
    const subject = encodeURIComponent(subjectText || `Contacto desde el portafolio de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nAsunto: ${subjectText}\n\n${message}`);

    setFormStatus('Abriendo tu aplicación de correo...');
    window.location.href = `mailto:estrella272729@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container letter-unfold-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-x-btn" onClick={onClose}><X size={18} /></button>

        <div className="unfold-paper">
          <div className="letter-header">
            <Mail size={28} className="letter-stamp-icon" />
            <h2>¡Sigamos en Contacto!</h2>
            <p className="letter-sub">¿Tienes una propuesta o proyecto en mente? Escríbeme.</p>
          </div>

          <div className="letter-body-content">
            <div className="contact-layout">
              <div className="contact-methods-grid">
                <a href="mailto:estrella272729@gmail.com" className="contact-card-btn">
                <Mail size={20} />
                <div className="btn-text">
                  <strong>Correo Electrónico</strong>
                  <span>estrella272729@gmail.com</span>
                </div>
                </a>

                <a href="https://www.linkedin.com/in/angie-estrella-espinosa-valdez-1365ab307/" target="_blank" rel="noreferrer" className="contact-card-btn">
                <Linkedin size={20} />
                <div className="btn-text">
                  <strong>LinkedIn</strong>
                  <span>Abrir mi perfil en LinkedIn</span>
                </div>
                <ExternalLink size={16} className="contact-external-icon" />
                </a>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-heading">
                  <Send size={18} />
                  <h3>Cuéntame tu idea</h3>
                </div>
                <label>
                  Nombre
                  <input name="name" type="text" placeholder="Tu nombre" required />
                </label>
                <label>
                  Asunto
                  <input name="subject" type="text" placeholder="¿Sobre qué quieres hablar?" required />
                </label>
                <label>
                  Mensaje
                  <textarea name="message" rows="3" placeholder="¿En qué podemos trabajar?" required />
                </label>
                <button type="submit" className="send-contact-btn">
                  <Send size={16} /> Enviar mensaje
                </button>
                {formStatus && <span className="contact-form-status">{formStatus}</span>}
              </form>
            </div>

            <div className="cv-download-section">
              <a className="download-cv-btn" href="/Hoja-de-vida-Angie-E-Espinosa-Valdez.pdf" download="Hoja de vida Angie E Espinosa Valdez.pdf">
                <FileText size={18} /> Descargar mi hoja de vida
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
