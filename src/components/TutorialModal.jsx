import React from 'react';
import { Sparkles, Sun, Laptop, User, Sprout, CheckCircle2, Smartphone, RotateCw } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function TutorialModal({ onClose }) {
  const handleFinishTutorial = () => {
    soundManager.playPop();
    onClose();
  };

  const steps = [
    {
      icon: <Sun size={22} className="tutorial-step-icon yellow" />,
      title: 'Luz',
      desc: 'Enciende la lámpara'
    },
    {
      icon: <Laptop size={22} className="tutorial-step-icon pink" />,
      title: 'Proyectos',
      desc: 'Explora el computador'
    },
    {
      icon: <User size={22} className="tutorial-step-icon purple" />,
      title: 'Conóceme',
      desc: 'Descubre mi perfil'
    },
    {
      icon: <Sprout size={22} className="tutorial-step-icon green" />,
      title: 'Más objetos',
      desc: 'Habilidades, logros y contacto'
    }
  ];

  return (
    <div className="modal-backdrop">
      <div className="modal-container tutorial-card-container">
        
        <div className="tutorial-header">
          <Sparkles className="sparkle-icon" size={26} />
          <h2>Guía Rápida de Exploración</h2>
          <p>Haz clic en los objetos que brillan</p>
        </div>

        <div className="tutorial-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="tutorial-step-card">
              <div className="step-icon-box">{step.icon}</div>
              <div className="step-info">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tutorial-rotate-tip">
          <div className="rotate-tip-icon">
            <Smartphone size={25} />
            <RotateCw size={15} />
          </div>
          <div>
            <strong>¿Estás en celular?</strong>
            <span>Gíralo de manera horizontal para disfrutar el escritorio completo.</span>
          </div>
        </div>

        <button className="tutorial-finish-btn" onClick={handleFinishTutorial}>
          <CheckCircle2 size={18} /> <span>¡Entendido! Entrar al Escritorio</span>
        </button>

      </div>
    </div>
  );
}
