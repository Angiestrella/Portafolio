import React from 'react';
import { X, Sprout } from 'lucide-react';

export default function PlantModal({ onClose, isLampOn = true }) {
  // Background image depending on lamp state (light on/off)
  const bgImage = isLampOn ? '/Planta_Oscuro.jpg' : '/Planta.jpg';

  const softSkillsOnLeaves = [
    { name: 'Creatividad', top: '24%', left: '15%', rotate: '-5deg' },
    { name: 'Comunicación', top: '22%', left: '58%', rotate: '4deg' },
    { name: 'Trabajo en equipo', top: '48%', left: '11%', rotate: '-3deg' },
    { name: 'Adaptabilidad', top: '45%', left: '64%', rotate: '5deg' },
    { name: 'Resolución de problemas', top: '70%', left: '28%', rotate: '-2deg' }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container plant-custom-modal-wide" onClick={(e) => e.stopPropagation()}>
        
        {/* Full background image: Planta.jpg / Planta_Oscuro.jpg */}
        <img src={bgImage} alt="Mi Crecimiento Profesional" className="plant-full-bg" />

        {/* Close Button */}
        <button className="close-x-btn plant-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Top Header Bar */}
        <div className="plant-top-bar">
          <div className="plant-badge-tag">
            <Sprout size={13} />
            <span>Mi Crecimiento</span>
          </div>

          <div className="top-bar-text-group">
            <h2 className="top-bar-title">Habilidades Blandas</h2>
            <div className="top-bar-subtitle-row">
              <span className="top-bar-subtext">
                Fortalezas personales y creativas que potencian mi desarrollo
              </span>
            </div>
          </div>
        </div>

        {/* Leaf Overlay Pins for Soft Skills */}
        <div className="plant-leaves-overlay">
          {softSkillsOnLeaves.map((skill, idx) => (
            <div
              key={idx}
              className="leaf-skill-pin"
              style={{
                top: skill.top,
                left: skill.left,
                transform: `rotate(${skill.rotate})`
              }}
            >
              <div className="leaf-pin-dot"></div>
              <div className="leaf-skill-pill">
                <span className="leaf-pill-text">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
