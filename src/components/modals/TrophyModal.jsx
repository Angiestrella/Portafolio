import React, { useState } from 'react';
import { X, Trophy, ChevronLeft, ChevronRight, Bookmark, Calendar, MapPin, Sparkles, Award } from 'lucide-react';

export default function TrophyModal({ onClose }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [trofeoPhoto, setTrofeoPhoto] = useState(0);
  const [davisPhoto, setDavisPhoto] = useState(0);
  const [inteligenciaPhoto, setInteligenciaPhoto] = useState(0);

  const trofeoPhotos = Array.from({ length: 11 }, (_, index) => `/trofeo/${index + 1}.png`);
  const davisPhotos = [1, 9, ...Array.from({ length: 16 }, (_, index) => index + 10), ...Array.from({ length: 11 }, (_, index) => index + 27)].map((photo) => `/davis/${photo}.png`);
  const inteligenciaPhotos = Array.from({ length: 24 }, (_, index) => `/inteligencia-natural/${index + 1}.jpg`);

  const bitacoraPages = [
    {
      id: 1,
      tag: '1er Lugar',
      tagBg: '#fff0c2',
      tagColor: '#a9681c',
      title: 'Hackathon Davivienda',
      date: '2023',
      location: 'Hackathon · Davivienda',
      photo: trofeoPhotos[0],
      photoCaption: '🏆 Presentación del trofeo ganador',
      story: 'Participé en una hackathon de Davivienda, en la que desarrollamos una propuesta para la ceremonia de reconocimientos de la organización. Nuestra propuesta buscó resaltar valores como el liderazgo, la resiliencia, el sentido de comunidad y el compromiso de sus colaboradores. Como resultado, el trofeo diseñado fue seleccionado como primer lugar entre los proyectos participantes, destacando por su capacidad para representar y reconocer estos valores.',
      highlights: [
        'Ideación y conceptualización',
        'Trabajo colaborativo',
        'Desarrollo de una propuesta tangible',
        'Primer lugar'
      ],
      quote: '«Las mejores ideas también se construyen en equipo.»'
    },
    {
      id: 2,
      tag: 'Ponente',
      tagBg: '#dcecf5',
      tagColor: '#2e718f',
      title: 'IX Seminario Internacional de Narrativas',
      date: '2025',
      location: 'Ponencia · Bioancestría',
      photo: '/Bioancestria_logo.png',
      photoCaption: '🌎 Presentación de Bioancestría',
      story: 'Participé como ponente presentando un proyecto de investigación-creación llamado Bioancestría, creado en el semillero de investigación y creación sonora Acústica de la Universidad EAFIT. Compartí resultados, metodologías y aprendizajes con estudiantes, investigadores y profesionales relacionados con las narrativas y los medios digitales.',
      highlights: [
        'Investigación-creación',
        'Presentación ante comunidad académica',
        'Comunicación de resultados'
      ],
      quote: '«Investigar también significa encontrar nuevas formas de contar.»'
    },
    {
      id: 3,
      tag: '2do Lugar',
      tagBg: '#dceffc',
      tagColor: '#3973a1',
      title: 'Hackathon Davivienda',
      date: '2025',
      location: 'Hackathon · Davis',
      photo: davisPhotos[0],
      photoCaption: '🚀 Propuesta Davis: experiencia física + digital',
      story: 'Junto con mi equipo desarrollamos una propuesta para transformar la alcancía de la Casita Roja de Davivienda en una experiencia híbrida física y digital. Creamos los Davis, unos llaveros personalizados conectados con cursos digitales. La propuesta obtuvo el segundo lugar.',
      highlights: [
        'Diseño de experiencia híbrida',
        'Ideación',
        'Diseño de productos',
        'Experiencia física + digital',
        'Segundo lugar'
      ],
      quote: '«Una buena experiencia conecta lo físico con lo digital.»'
    },
    {
      id: 4,
      tag: 'Aval internacional',
      tagBg: '#e2e8f0',
      tagColor: '#526276',
      title: 'RedCOLSI',
      date: '2026',
      location: 'Paraguay · Representación de Colombia',
      photo: inteligenciaPhotos[0],
      photoCaption: '🏅 Inteligencia natural: voces del territorio',
      story: 'Uno de los hitos más importantes de mi trayectoria hasta ahora. El proyecto de investigación-creación Inteligencia natural: voces del territorio, creado en el semillero de investigación y creación sonora Acústica de la Universidad EAFIT, fue seleccionado por RedCOLSI para representar a Colombia en un evento internacional en Paraguay, reconociendo su calidad académica, impacto y aporte a la divulgación científica.',
      highlights: [
        'Selección de proyecto',
        'Representación de Colombia',
        'Investigación-creación',
        'Proyección internacional',
        'Participación en Paraguay'
      ],
      quote: '«Lo que comienza como una idea puede llegar mucho más lejos de lo que imaginamos.»'
    }
  ];

  const changePage = (newIndex, direction = 'next') => {
    if (newIndex < 0 || newIndex >= bitacoraPages.length || isFlipping || newIndex === currentPage) return;
    setFlipDirection(direction);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(newIndex);
    }, 220);
    setTimeout(() => {
      setIsFlipping(false);
    }, 450);
  };

  const handleNext = () => changePage(currentPage + 1, 'next');
  const handlePrev = () => changePage(currentPage - 1, 'prev');

  const changeTrofeoPhoto = (direction) => {
    setTrofeoPhoto((photoIndex) => (
      (photoIndex + direction + trofeoPhotos.length) % trofeoPhotos.length
    ));
  };

  const changeDavisPhoto = (direction) => {
    setDavisPhoto((photoIndex) => (
      (photoIndex + direction + davisPhotos.length) % davisPhotos.length
    ));
  };

  const changeInteligenciaPhoto = (direction) => {
    setInteligenciaPhoto((photoIndex) => (
      (photoIndex + direction + inteligenciaPhotos.length) % inteligenciaPhotos.length
    ));
  };

  const pageData = bitacoraPages[currentPage];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container album-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-x-btn album-close-btn" onClick={onClose} aria-label="Cerrar bitácora">
          <X size={20} />
        </button>

        {/* Top Header Bar */}
        <div className="album-top-header">
          <div className="album-title-group">
            <Bookmark size={20} className="album-icon-gold" />
            <h2>Bitácora de Logros & Eventos</h2>
          </div>
          <span className="album-page-badge">
            Página {currentPage + 1} de {bitacoraPages.length}
          </span>
        </div>

        {/* Album Book Binder Wrapper */}
        <div className="album-book-wrapper">
          
          {/* Index Tabs on top edge of book */}
          <div className="album-tabs-nav">
            {bitacoraPages.map((pg, idx) => (
              <button
                key={pg.id}
                className={`album-tab-btn ${idx === currentPage ? 'active' : ''}`}
                onClick={() => changePage(idx, idx > currentPage ? 'next' : 'prev')}
              >
                <span className="tab-number">0{idx + 1}</span>
                <span className="tab-label">{pg.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Book Sheets Spread with 3D flip effect */}
          <div className={`album-book-spread album-first-page ${isFlipping ? `flipping-${flipDirection}` : ''}`}>
            
            {/* Spine Center Fold */}
            <div className="album-spine-fold"></div>

            {/* LEFT PAGE: Photo Polaroid & Badges */}
            <div className="album-page album-page-left">
              <div className="polaroid-frame">
                <div className="tape-corner tape-top-left"></div>
                <div className="tape-corner tape-top-right"></div>
                
                <div className={`polaroid-img-wrapper ${[1, 3, 4].includes(pageData.id) ? 'bitacora-carousel' : ''}`}>
                  <img
                    src={pageData.id === 1 ? trofeoPhotos[trofeoPhoto] : pageData.id === 3 ? davisPhotos[davisPhoto] : pageData.id === 4 ? inteligenciaPhotos[inteligenciaPhoto] : pageData.photo}
                    alt={pageData.id === 1 ? `Foto ${trofeoPhoto + 1} del Hackathon Davivienda` : pageData.id === 3 ? `Foto ${davisPhoto + 1} de Davis` : pageData.id === 4 ? `Foto ${inteligenciaPhoto + 1} de Inteligencia Natural` : pageData.title}
                    className="polaroid-img"
                  />
                  {pageData.id === 1 && (
                    <>
                      <button
                        className="trofeo-carousel-btn previous"
                        onClick={() => changeTrofeoPhoto(-1)}
                        aria-label="Foto anterior del trofeo"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        className="trofeo-carousel-btn next"
                        onClick={() => changeTrofeoPhoto(1)}
                        aria-label="Foto siguiente del trofeo"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <span className="trofeo-photo-counter">{trofeoPhoto + 1} / {trofeoPhotos.length}</span>
                    </>
                  )}
                  {pageData.id === 3 && (
                    <>
                      <button className="trofeo-carousel-btn previous" onClick={() => changeDavisPhoto(-1)} aria-label="Foto anterior de Davis">
                        <ChevronLeft size={16} />
                      </button>
                      <button className="trofeo-carousel-btn next" onClick={() => changeDavisPhoto(1)} aria-label="Foto siguiente de Davis">
                        <ChevronRight size={16} />
                      </button>
                      <span className="trofeo-photo-counter">{davisPhoto + 1} / {davisPhotos.length}</span>
                    </>
                  )}
                  {pageData.id === 4 && (
                    <>
                      <button className="trofeo-carousel-btn previous" onClick={() => changeInteligenciaPhoto(-1)} aria-label="Foto anterior de Inteligencia Natural">
                        <ChevronLeft size={16} />
                      </button>
                      <button className="trofeo-carousel-btn next" onClick={() => changeInteligenciaPhoto(1)} aria-label="Foto siguiente de Inteligencia Natural">
                        <ChevronRight size={16} />
                      </button>
                      <span className="trofeo-photo-counter">{inteligenciaPhoto + 1} / {inteligenciaPhotos.length}</span>
                    </>
                  )}
                </div>
                <div className="polaroid-caption">
                  <strong>Galería del proyecto</strong>
                  <span>{pageData.photoCaption}</span>
                </div>
              </div>

              {pageData.id === 1 && (
                <div className="trofeo-thumbnails" aria-label="Fotos del Hackathon Davivienda">
                  {trofeoPhotos.map((photo, index) => (
                    <button
                      key={photo}
                      className={`trofeo-thumbnail ${index === trofeoPhoto ? 'active' : ''}`}
                      onClick={() => setTrofeoPhoto(index)}
                      aria-label={`Ver foto ${index + 1}`}
                    >
                      <img src={photo} alt="" />
                    </button>
                  ))}
                </div>
              )}

              {pageData.id === 3 && (
                <div className="trofeo-thumbnails" aria-label="Fotos de Davis">
                  {davisPhotos.map((photo, index) => (
                    <button key={photo} className={`trofeo-thumbnail ${index === davisPhoto ? 'active' : ''}`} onClick={() => setDavisPhoto(index)} aria-label={`Ver foto Davis ${index + 1}`}>
                      <img src={photo} alt="" />
                    </button>
                  ))}
                </div>
              )}

              {pageData.id === 4 && (
                <div className="trofeo-thumbnails" aria-label="Fotos de Inteligencia Natural">
                  {inteligenciaPhotos.map((photo, index) => (
                    <button key={photo} className={`trofeo-thumbnail ${index === inteligenciaPhoto ? 'active' : ''}`} onClick={() => setInteligenciaPhoto(index)} aria-label={`Ver foto de Inteligencia Natural ${index + 1}`}>
                      <img src={photo} alt="" />
                    </button>
                  ))}
                </div>
              )}

              <div className="page-left-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span><strong>{pageData.date}</strong></span>
                </div>
                <div className="meta-item">
                  <MapPin size={14} />
                  <span><strong>{pageData.location}</strong></span>
                </div>
              </div>
            </div>

            {/* RIGHT PAGE: Bitácora Story & Highlights */}
            <div className="album-page album-page-right">
              <div className="journal-header">
                <span
                  className="journal-tag-badge"
                  style={{ background: pageData.tagBg, color: pageData.tagColor }}
                >
                  <Award size={13} /> {pageData.tag}
                </span>
                <h3 className="journal-title">{pageData.title}</h3>
              </div>

              <div className="journal-section">
                <h4 className="journal-subtitle">
                  <Sparkles size={14} /> Bitácora del Evento
                </h4>
                <p className="journal-story">{pageData.story}</p>
              </div>

              <div className="journal-section">
                <h4 className="journal-subtitle">Momentos Clave</h4>
                <ul className="journal-highlights-list">
                  {pageData.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {pageData.quote && (
                <div className="journal-quote-box">
                  <p>{pageData.quote}</p>
                </div>
              )}
            </div>

          </div>

          {/* Book Navigation Footer */}
          <div className="album-controls-bar">
            <button
              className="album-nav-btn"
              onClick={handlePrev}
              disabled={currentPage === 0 || isFlipping}
              aria-label="Página anterior"
            >
              <ChevronLeft size={18} /> Anterior
            </button>

            <div className="album-dots-indicator">
              {bitacoraPages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot-indicator ${idx === currentPage ? 'active' : ''}`}
                  onClick={() => changePage(idx, idx > currentPage ? 'next' : 'prev')}
                />
              ))}
            </div>

            <button
              className="album-nav-btn"
              onClick={handleNext}
              disabled={currentPage === bitacoraPages.length - 1 || isFlipping}
              aria-label="Página siguiente"
            >
              Siguiente <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
