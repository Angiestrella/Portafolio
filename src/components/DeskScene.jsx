import React, { useState } from 'react';
import { 
  Sun,
  Brain,
  
} from 'lucide-react';
import ComputerModal from './modals/ComputerModal';
import DollModal from './modals/DollModal';
import PlantModal from './modals/PlantModal';
import TrophyModal from './modals/TrophyModal';
import BeadsCupModal from './modals/BeadsCupModal';
import LetterModal from './modals/LetterModal';
import PostItModal from './modals/PostItModal';
import deskDayImage from '../../escritorio_dia.jpg';
import deskNightImage from '../../escritorio_noche.jpg';

export default function DeskScene() {
  // State for Lamp light toggle (ON = spotlight lamp glow, OFF = natural daylight shadows)
  const [isLampOn, setIsLampOn] = useState(true);

  // Active modal state
  const [activeModal, setActiveModal] = useState(null);
  const [activeSequenceStep, setActiveSequenceStep] = useState(0);
  const sequenceModalIds = ['doll', 'plant', 'beads', 'trophy', 'computer', 'letter'];

  const toggleLamp = (e) => {
    e.stopPropagation();
    setIsLampOn(prev => !prev);
  };

  const closeModal = () => {
    const currentStep = sequenceModalIds.indexOf(activeModal);
    if (currentStep === activeSequenceStep) {
      setActiveSequenceStep((step) => step + 1);
    }
    setActiveModal(null);
  };

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  return (
    <div className="desk-viewport-photo-wrapper">
      
      {/* Real Desk Photo Stage with Smooth Lamp Lighting Cross-fade */}
      <div className={`photo-stage-container sequence-step-${activeSequenceStep + 1}`}>
        
        <img
          src={isLampOn ? deskNightImage : deskDayImage}
          alt={isLampOn ? 'Escritorio Interactivo con Lámpara Encendida' : 'Escritorio Interactivo con Luz Natural'}
          className="desk-photo-layer visible"
        />

        {/* Ambient Overlay */}
        <div className={`photo-ambient-vignette ${isLampOn ? 'lamp-glow-mode' : 'daylight-mode'}`} />

        {/* INTERACTIVE HOTSPOTS OVERLAID EXACTLY ON PHOTO OBJECTS */}

        {/* 1. LÁMPARA (Lamp Switch) */}
        <div 
          className="photo-hotspot hotspot-lamp hotspot-static"
          onClick={toggleLamp}
          title={isLampOn ? "Apagar Lámpara" : "Encender Lámpara"}
        >
          <div className="hotspot-light-symbol" aria-hidden="true"><Sun size={20} /></div>
          <span className="hotspot-tooltip">Cambiar luz del escritorio</span>
        </div>

        {/* 2. COMPUTADOR (iMac Monitor & Proyectos) */}
        <div 
          className="photo-hotspot hotspot-computer pulse-order-5"
          onClick={() => openModal('computer')}
          title="Ver Pantalla del Computador & Proyectos"
        >
          <div className="hotspot-pulse-ring" />
          <span className="hotspot-tooltip">Explorar mis proyectos UX/UI</span>
        </div>

        {/* 3. POST-IT DEL COMPUTADOR */}
        <div 
          className="photo-hotspot hotspot-postit"
          onClick={() => openModal('postit')}
          title="Ver Filosofía de Diseño"
        >
          <div className="hotspot-pulse-ring hotspot-static" />
          <div className="hotspot-note-symbol" aria-hidden="true"><Brain size={18} /></div>
          <span className="hotspot-tooltip">Conocer mi filosofía de diseño</span>
        </div>

        {/* 4. MUÑEQUITA (Sobre Mí & Perfil) */}
        <div 
          className="photo-hotspot hotspot-doll pulse-order-1"
          onClick={() => openModal('doll')}
          title="Conóceme: Sobre Mí & Perfil"
        >
          <div className="hotspot-pulse-ring" />
          <div className="hotspot-glow doll-glow" />
          <span className="hotspot-tooltip">Conocer quién soy y mi perfil</span>
        </div>

        {/* 5. MACETA (Crecimiento & Habilidades) */}
        <div 
          className="photo-hotspot hotspot-plant pulse-order-2"
          onClick={() => openModal('plant')}
          title="Ver Habilidades Técnicas & Blandas"
        >
          <div className="hotspot-pulse-ring" />
          <span className="hotspot-tooltip">Ver mis habilidades</span>
        </div>

        {/* 6. TROFEO (Logros & Hackathons) */}
        <div 
          className="photo-hotspot hotspot-trophy pulse-order-4"
          onClick={() => openModal('trophy')}
          title="Ver Logros & Reconocimientos"
        >
          <div className="hotspot-pulse-ring" />
          <span className="hotspot-tooltip">Ver mis logros y reconocimientos</span>
        </div>

        {/* 7. VASITO CON BOLITAS (Herramientas) */}
        <div 
          className="photo-hotspot hotspot-beads pulse-order-3"
          onClick={() => openModal('beads')}
          title="Mis Herramientas de Diseño & Dev"
        >
          <div className="hotspot-pulse-ring" />
          <span className="hotspot-tooltip">Conocer mis herramientas</span>
        </div>

        {/* 8. CARTA (Contacto & CV) */}
        <div 
          className="photo-hotspot hotspot-letter pulse-order-6"
          onClick={() => openModal('letter')}
          title="Abrir Carta de Contacto & CV"
        >
          <div className="hotspot-pulse-ring" />
          <span className="hotspot-tooltip">Contactarme y ver mi CV</span>
        </div>

      </div>

      {/* MODALS OVERLAY */}
      {activeModal === 'computer' && <ComputerModal onClose={closeModal} isLampOn={isLampOn} />}
      {activeModal === 'doll' && <DollModal onClose={closeModal} />}
      {activeModal === 'plant' && <PlantModal onClose={closeModal} isLampOn={isLampOn} />}
      {activeModal === 'trophy' && <TrophyModal onClose={closeModal} />}
      {activeModal === 'beads' && <BeadsCupModal onClose={closeModal} isLampOn={isLampOn} />}
      {activeModal === 'letter' && <LetterModal onClose={closeModal} />}
      {activeModal === 'postit' && <PostItModal onClose={closeModal} />}

    </div>
  );
}
