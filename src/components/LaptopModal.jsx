import React, { useState } from 'react';
import { Laptop, Terminal, Cpu, Download, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function LaptopModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('skills');

  const skillsList = [
    { name: "React.js & Hooks", level: 95, icon: "⚛️" },
    { name: "JavaScript / ES6+", level: 90, icon: "⚡" },
    { name: "CSS3 / 3D Transforms / Animation", level: 95, icon: "🎨" },
    { name: "HTML5 / Semantic Web / SEO", level: 98, icon: "🌐" },
    { name: "Three.js / WebGL Basics", level: 80, icon: "🧊" },
    { name: "UI/UX & Figma Prototyping", level: 88, icon: "✨" }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-3d laptop-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>

        {/* Laptop Metal Shell Header */}
        <div className="laptop-top-bar">
          <div className="laptop-mac-dots">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="laptop-title">
            <Laptop size={16} /> DEV_STUDIO_OS_v2.6
          </div>
        </div>

        {/* Laptop Screen Body */}
        <div className="laptop-screen-content">
          
          {/* Side Navigation Tabs */}
          <div className="laptop-sidebar">
            <button 
              className={`laptop-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => { soundManager.playPop(); setActiveTab('skills'); }}
            >
              <Cpu size={16} /> Technical Skills
            </button>
            <button 
              className={`laptop-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
              onClick={() => { soundManager.playPop(); setActiveTab('terminal'); }}
            >
              <Terminal size={16} /> Interactive CLI
            </button>
            <button 
              className={`laptop-tab-btn ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => { soundManager.playPop(); setActiveTab('resume'); }}
            >
              <Download size={16} /> Resume / CV
            </button>
          </div>

          {/* Main Display Area */}
          <div className="laptop-display-body">
            
            {activeTab === 'skills' && (
              <div className="skills-dashboard">
                <h3 className="dash-title">💻 Habilidades & Nivel de Dominio</h3>
                <div className="skills-bars-grid">
                  {skillsList.map((skill, idx) => (
                    <div key={idx} className="skill-bar-row">
                      <div className="skill-bar-info">
                        <span>{skill.icon} {skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'terminal' && (
              <div className="terminal-window">
                <div className="term-line prompt">$ portfolio --status</div>
                <div className="term-line success">✓ Status: System fully operational</div>
                <div className="term-line prompt">$ portfolio --stack</div>
                <div className="term-line output">React 18 + Vite + Custom 3D CSS Engine + Web Audio API</div>
                <div className="term-line prompt">$ portfolio --location</div>
                <div className="term-line output">Earth (Open to remote worldwide opportunities 🌍)</div>
                <div className="term-line prompt">$ portfolio --hire-me</div>
                <div className="term-line highlight">➜ Ready to collaborate! Send a message via Locker Flyer.</div>
              </div>
            )}

            {activeTab === 'resume' && (
              <div className="resume-download-box">
                <Code size={40} color="#ec4899" />
                <h3>Currículum Vitae (CV)</h3>
                <p>Descarga una copia completa de mi trayectoria, proyectos y certificaciones en formato PDF.</p>
                <a 
                  href="#download" 
                  className="download-cv-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    soundManager.playPop();
                    alert("¡Gracias! En una versión de producción aquí se descargaría tu CV.pdf personalizado.");
                  }}
                >
                  <Download size={18} /> Descargar CV (PDF)
                </a>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
