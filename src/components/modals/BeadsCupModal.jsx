import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import cupDayImage from '../../../vaso_dia.optimized.jpg';
import cupNightImage from '../../../vaso_noche.optimized.jpg';

export default function BeadsCupModal({ onClose, isLampOn = true }) {
  const [activeTool, setActiveTool] = useState(null);

  // Background image depending on lamp state (light on/off)
  const bgImage = isLampOn ? cupNightImage : cupDayImage;

  // 7 Tools matching the user's uploaded images
  const tools = [
    { 
      id: 'figma', 
      name: 'Figma', 
      subtitle: 'UI/UX & Prototipado', 
      logo: '/Fig.png',
      isCenter: true,
      tooltipPosition: 'below'
    },
    { 
      id: 'canva', 
      name: 'Canva', 
      subtitle: 'Diseño Gráfico', 
      logo: '/Canva.jpg',
      angle: 0,
      tooltipPosition: 'below'
    },
    { 
      id: 'audition', 
      name: 'Adobe Audition', 
      subtitle: 'Edición de Audio', 
      logo: '/Au.jpg',
      angle: 60,
      tooltipPosition: 'right'
    },
    { 
      id: 'premiere', 
      name: 'Premiere Pro', 
      subtitle: 'Edición de Video', 
      logo: '/Pr.jpg',
      angle: 120,
      tooltipPosition: 'right'
    },
    { 
      id: 'vscode', 
      name: 'Visual Studio Code', 
      subtitle: 'Desarrollo Frontend', 
      logo: '/vs.jpg',
      angle: 180,
      tooltipPosition: 'above'
    },
    { 
      id: 'capcut', 
      name: 'CapCut', 
      subtitle: 'Edición de Contenido', 
      logo: '/capcut.png',
      angle: 240,
      tooltipPosition: 'left'
    },
    { 
      id: 'illustrator', 
      name: 'Illustrator', 
      subtitle: 'Ilustración Vectorial', 
      logo: '/ai.jpg',
      angle: 300,
      tooltipPosition: 'left'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container vasito-custom-modal-wide" onClick={(e) => e.stopPropagation()}>
        
        {/* Dynamic background image for the lamp state */}
        <img src={bgImage} alt="Vasito de Herramientas" className="vasito-full-bg" />

        {/* Close Button */}
        <button className="close-x-btn vasito-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Top Header Bar ("Barrita arriba") */}
        <div className="vasito-top-bar">
          <div className="vasito-badge-tag">
            <Sparkles size={13} />
            <span>Mi Kit Creativo</span>
          </div>

          <div className="top-bar-text-group">
            <h2 className="top-bar-title">Vasito de herramientas</h2>
            
            <div className="top-bar-subtitle-row">
              {activeTool ? (
                <span className="top-active-tool">
                  <strong className="tool-tag-name">{activeTool.name}</strong>
                  <span className="tool-tag-sep">•</span>
                  <span className="tool-tag-sub">{activeTool.subtitle}</span>
                </span>
              ) : (
                <span className="top-bar-subtext">
                  Herramientas para dar vida a mis ideas
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Center Cup Ring Container (Posicionadas sobre la boca del vasito) */}
        <div className="vasito-cup-center-target">
          <div className="vasito-circles-ring">
            {tools.map((tool) => {
              if (tool.isCenter) {
                return (
                  <div
                    key={tool.id}
                    className="tool-circle-anchor anchor-center"
                    onMouseEnter={() => setActiveTool(tool)}
                    onMouseLeave={() => setActiveTool(null)}
                  >
                    <div className="cup-tool-circle inner-circle">
                      <img src={tool.logo} alt={tool.name} className="tool-logo-img" />
                      <span className={`tool-hover-tooltip tooltip-${tool.tooltipPosition}`}>{tool.name}</span>
                    </div>
                  </div>
                );
              }

              // Radial ring positioning around center
              const radius = 86; // px radius
              const rad = (tool.angle - 90) * (Math.PI / 180);
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={tool.id}
                  className="tool-circle-anchor anchor-radial"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                  onMouseEnter={() => setActiveTool(tool)}
                  onMouseLeave={() => setActiveTool(null)}
                >
                  <div className="cup-tool-circle inner-circle">
                    <img src={tool.logo} alt={tool.name} className="tool-logo-img" />
                    <span className={`tool-hover-tooltip tooltip-${tool.tooltipPosition}`}>{tool.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
