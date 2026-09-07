import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Heart, GraduationCap, Video, RotateCcw, Maximize2 } from 'lucide-react';
import angieImage from '../../../Angie.optimized.jpg';

export default function DollModal({ onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasPresentationVideo, setHasPresentationVideo] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          containerRef.current.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container doll-video-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-x-btn doll-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        {/* Header Bar */}
        <div className="doll-video-header">
          <div className="doll-header-badge">
            <Sparkles size={14} />
            <span>Quién Soy</span>
          </div>
          <h2 className="doll-video-title">Video de Presentación</h2>
          <p className="doll-video-subtext">
            Conoce un poco más sobre mi visión como Diseñadora Interactiva
          </p>
        </div>

        {/* Video Presentation Layout */}
        <div className="doll-video-layout">
          
          {/* LEFT: Video Player Stage */}
          <div className="doll-video-stage-column">
            <div className="video-player-container" ref={containerRef}>
              
              {hasPresentationVideo ? (
                <>
                  <video
                    ref={videoRef}
                    className="presentation-video-element"
                    poster={angieImage}
                    playsInline
                    onError={() => {
                      setHasPresentationVideo(false);
                      setIsPlaying(false);
                    }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlay}
                  >
                    <source src="/video-presentacion.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>

                  {!isPlaying && (
                    <button className="video-overlay-play-btn" onClick={togglePlay} aria-label="Reproducir video">
                      <div className="play-pulse-ring"></div>
                      <Play size={36} className="play-icon-svg" />
                    </button>
                  )}

                  <div className="video-custom-controls">
                <button className="ctrl-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pausar' : 'Reproducir'} title={isPlaying ? 'Pausar' : 'Reproducir'}>
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <button className="ctrl-btn" onClick={handleRestart} aria-label="Reiniciar video" title="Reiniciar video">
                  <RotateCcw size={16} />
                </button>

                <div className="video-status-tag">
                  <Video size={14} />
                  <span>Presentación · Angie Espinosa</span>
                </div>

                <button className="ctrl-btn mute-btn" onClick={toggleMute} aria-label={isMuted ? 'Activar sonido' : 'Silenciar'} title={isMuted ? 'Activar sonido' : 'Silenciar'}>
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <button
                  className="ctrl-btn fullscreen-btn"
                  onClick={toggleFullscreen}
                  aria-label="Pantalla completa"
                  title="Pantalla completa"
                >
                  <Maximize2 size={18} />
                </button>
                  </div>
                </>
              ) : (
                <div className="presentation-video-fallback">
                  <img src={angieImage} alt="Angie Espinosa" />
                  <span>Video de presentación próximamente</span>
                </div>
              )}

            </div>

            {/* Video Caption & Tagline */}
            <div className="video-caption-box">
              <span className="caption-icon">✨</span>
              <p>
                <strong>«Transformar ideas complejas en experiencias vivas, humanas e intuitivas.»</strong>
              </p>
            </div>
          </div>

          {/* RIGHT: Profile & Bio Highlights */}
          <div className="doll-profile-column">
            
            {/* Profile Avatar Card */}
            <div className="profile-mini-card">
              <div className="mini-avatar-ring">
                <img src={angieImage} alt="Angie Espinosa" className="mini-avatar-img" />
              </div>
              <div className="profile-mini-info">
                <h3>Angie Espinosa</h3>
                <span className="profile-role-pill">Diseñadora interactiva</span>
              </div>
            </div>

            {/* Bio Info Cards */}
            <div className="profile-bio-details">
              
              <div className="bio-detail-item">
                <GraduationCap size={18} className="detail-icon" />
                <div>
                  <strong>Universidad EAFIT</strong>
                  <p>Estudiante de Diseño Interactivo · Medellín</p>
                </div>
              </div>

              <div className="bio-detail-item">
                <Sparkles size={18} className="detail-icon" />
                <div>
                  <strong>Enfoque Creativo</strong>
                  <p>UX/UI, prototipado interactivo, narrativa digital y experiencias centradas en las personas.</p>
                </div>
              </div>

              <div className="bio-detail-item">
                <Heart size={18} className="detail-icon" />
                <div>
                  <strong>Intereses & Pasiones</strong>
                  <div className="bio-pills-cloud">
                    <span>🧶 Crochet</span>
                    <span>🎵 Música</span>
                    <span>🎨 UI/UX</span>
                    <span>📖 Storytelling</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
