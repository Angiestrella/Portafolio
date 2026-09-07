import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TutorialModal from './components/TutorialModal';
import DeskScene from './components/DeskScene';
import { Volume2, VolumeX, HelpCircle } from 'lucide-react';
import { soundManager } from './utils/audio';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleStartExperience = () => {
    setHasStarted(true);
    setShowTutorial(true); // Show tutorial right after clicking Empezar
  };

  const toggleSound = () => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <div className="app-container">
      
      {/* 1. COVER WELCOME SCREEN */}
      {!hasStarted ? (
        <WelcomeScreen onStart={handleStartExperience} />
      ) : (
        <>
          {/* Floating Corner Control Buttons */}
          <div className="floating-corner-controls">
            <button 
              className="floating-icon-btn" 
              onClick={() => setShowTutorial(true)} 
              title="Guía de Interacciones (Ayuda)"
            >
              <HelpCircle size={20} />
            </button>

            <button 
              className="floating-icon-btn" 
              onClick={toggleSound} 
              title={soundEnabled ? "Silenciar Música & Sonido" : "Activar Música & Sonido"}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>

          {/* Main Interactive Desktop Scene */}
          <main className="main-desk-wrapper">
            <DeskScene />
          </main>

          {/* 2. INTERACTIVE TUTORIAL MODAL */}
          {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
        </>
      )}

    </div>
  );
}
