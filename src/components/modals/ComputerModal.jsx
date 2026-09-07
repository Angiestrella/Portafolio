import React, { useEffect, useRef, useState } from 'react';
import { Home, ExternalLink, Sparkles, FileText, HelpCircle, UserRound, ChevronLeft, ChevronRight } from 'lucide-react';
import screenImage from '../../../Pantallapopup.jpg';
import darkScreenImage from '../../../Pantalla_oscura.jpg';
import linoBackground from '../../../LINO_SECCION.optimized.jpg';
import linoFrameSix from '../../../Frame 6 (1).optimized.jpg';
import bioancestriaFrameEight from '../../../Frame 8.optimized.jpg';
import sommyBackground from '../../../sommy3.optimized.jpg';

const cloudinaryVideos = {
  lino: 'https://res.cloudinary.com/lhqknncj/video/upload/v1788749288/LINO_VIDEO.mp4',
  bioancestria: 'https://res.cloudinary.com/lhqknncj/video/upload/v1788749262/bioancestria.mp4',
  sommy5: 'https://res.cloudinary.com/lhqknncj/video/upload/v1788749203/5.mp4'
};

function ProjectCaseStudy({ project, onBack }) {
  const [activeLinoStage, setActiveLinoStage] = useState(0);
  const caseStudy = {
    proj1: {
      title: 'LINO APP',
      eyebrow: 'UX/UI · APP MÓVIL',
      intro: 'Una experiencia sencilla para conectar, explorar y cuidar lo que nos importa.',
      description: 'Diseño de una app móvil cálida y accesible que convierte una tarea cotidiana en una experiencia clara y agradable.',
      question: '¿Cómo hacer que organizar las finanzas se sienta sencillo, cercano y posible para cualquier persona?',
      result: 'Una app más humana',
      role: 'UX/UI · Investigación · Prototipado',
      process: ['Escuchar', 'Ordenar', 'Diseñar', 'Probar', 'Iterar'],
      resultDescription: 'Una interfaz amable, ordenada y fácil de usar, pensada para que cada interacción se sienta natural.',
      theme: 'theme-pink',
      logo: '/LINO_LOGO.png',
      logoAlt: 'Logo de Lino'
    },
    proj2: {
      title: 'SOMMY',
      eyebrow: 'UX/UI · PLATAFORMA DIGITAL',
      intro: 'Una experiencia digital clara, fresca y pensada para acompañar cada decisión.',
      description: 'Diseño de una plataforma web cercana y fácil de explorar, con una navegación simple y momentos visuales memorables.',
      question: '¿Cómo acompañar cada decisión con una experiencia digital clara, fresca y fácil de explorar?',
      result: 'Una experiencia más clara',
      role: 'UX/UI · Arquitectura · UI Design',
      process: ['Explorar', 'Entender', 'Estructurar', 'Diseñar', 'Validar'],
      resultDescription: 'Una plataforma directa y fresca, donde cada decisión se entiende con menos esfuerzo.',
      theme: 'theme-blue',
      logo: '/Sommy_logo.png',
      logoAlt: 'Logo de Sommy'
    },
    proj3: {
      title: 'BIOANCESTRÍA',
      eyebrow: 'UX/UI · PRODUCTO DIGITAL',
      intro: 'Un espacio digital que conecta identidad, origen y nuevas formas de descubrir.',
      description: 'Diseño de una experiencia sensible y accesible para presentar historias, datos y descubrimientos de forma intuitiva.',
      result: 'Una historia que conecta',
      role: 'Producto Digital · UX Research · UI',
      process: ['Investigar', 'Conectar', 'Narrar', 'Prototipar', 'Compartir'],
      resultDescription: 'Una experiencia sensible para convertir información compleja en una historia fácil de descubrir.',
      theme: 'theme-green',
      logo: '/Bioancestria_logo.png',
      logoAlt: 'Logo de Bioancestría'
    }
  }[project.id];
  const isLinoOrSommy = project.id === 'proj1' || project.id === 'proj2';
  const linoStages = [
    {
      kicker: '01 · DESCUBRIR',
      title: 'Escuchar antes de diseñar',
      text: 'Entender los hábitos, dudas y pequeños frenos que aparecen al organizar las finanzas.',
      visual: 'stage-discover'
    },
    {
      kicker: '02 · ENFOCAR',
      title: 'Convertir ruido en claridad',
      text: 'Ordenar la información para que cada persona encuentre una acción posible en pocos pasos.',
      visual: 'stage-focus'
    },
    {
      kicker: '03 · PROTOTIPAR',
      title: 'Probar una experiencia amable',
      text: 'Construir una interfaz cálida, accesible y suficientemente flexible para distintos ritmos.',
      visual: 'stage-prototype'
    },
    {
      kicker: '04 · ENTREGAR',
      title: 'Una app que acompaña',
      text: 'El resultado es una experiencia más humana: clara al comenzar y tranquila al volver.',
      visual: 'stage-deliver'
    }
  ];

  if (project.id === 'proj1') {
    return (
      <div className="lino-image-only">
        <button className="lino-image-back" onClick={onBack}>
          <ChevronLeft size={17} /> Volver a Carpetas
        </button>
        <img
          src={linoFrameSix}
          alt="Proyecto Lino"
        />
        <video
          className="lino-image-video"
          src={cloudinaryVideos.lino}
          poster="/LINO_LOGO.png"
          controls
          muted
          playsInline
          preload="metadata"
          aria-label="Video del proyecto Lino"
        />
      </div>
    );
  }

  if (project.id === 'proj2') {
    return (
      <div className="sommy-image-only">
        <button className="lino-image-back sommy-image-back" onClick={onBack}>
          <ChevronLeft size={17} /> Volver a Carpetas
        </button>
        <img
          src={sommyBackground}
          alt="Proyecto Sommy"
        />
        <span className="sommy-role-label">Rol: Project manager</span>
        {[1, 2, 3, 4, 5, 7].map((videoNumber) => (
          <video
            className={`sommy-image-video sommy-image-video-${videoNumber}`}
            key={videoNumber}
            src={videoNumber === 5 ? cloudinaryVideos.sommy5 : `/${videoNumber}.mp4`}
            poster="/Sommy_logo.png"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={`Video ${videoNumber} del proyecto Sommy`}
          />
        ))}
      </div>
    );
  }

  if (project.id === 'proj3') {
    return (
      <div className="bioancestria-image-only">
        <button className="lino-image-back bioancestria-image-back" onClick={onBack}>
          <ChevronLeft size={17} /> Volver a Carpetas
        </button>
        <img
          src={bioancestriaFrameEight}
          alt="Proyecto Bioancestría"
        />
        <video
          className="bioancestria-image-video"
          src={cloudinaryVideos.bioancestria}
          poster="/Bioancestria_logo.png"
          controls
          muted
          playsInline
          preload="metadata"
          aria-label="Video del proyecto Bioancestría"
        />
      </div>
    );
  }

  return (
    <div
      className={`lino-case-study ${caseStudy.theme}${project.id === 'proj1' ? ' lino-reference' : ''}`}
      style={project.id === 'proj1' ? { '--lino-background': `url(${linoBackground})` } : undefined}
    >
      <button className="back-btn lino-back-btn" onClick={onBack}>
        <ChevronLeft size={16} /> Volver a Carpetas
      </button>

      {project.id !== 'proj1' && (
        <nav className="case-study-nav" aria-label={`Secciones de ${caseStudy.title}`}>
          <a href="#project-overview">01 Resumen</a>
          {isLinoOrSommy ? (
            <>
              <a href="#project-question">02 Pregunta</a>
              <a href="#project-role">03 Mi rol</a>
              <a href="#project-result">04 Resultado</a>
            </>
          ) : (
            <>
              <a href="#project-process">02 Proceso</a>
              <a href="#project-result">03 Resultado</a>
            </>
          )}
        </nav>
      )}

      {project.id === 'proj1' ? (
        <>
          <section className="lino-hero" id="project-overview">
            <div className="lino-hero-copy">
              <h1>Lino</h1>
              <p>Una experiencia digital para reconocer, acompañar y conectar.</p>
              <div className="lino-tags">
                <span>UX/UI Design</span>
                <span>Prototype</span>
              </div>
            </div>
            <div className="project-brand-stage" aria-hidden="true">
              <div className="project-brand-orbit orbit-one"></div>
              <div className="project-brand-orbit orbit-two"></div>
              <div className="project-brand-mark project-brand-phone">
                <div className="phone-ui">
                  <div className="phone-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="phone-chat chat-one">¡Hola Camila!</div>
                  <div className="phone-chat chat-two">¡Bienvenido! ¿Quieres hablar?</div>
                  <div className="phone-face">
                    <span className="eye left"></span>
                    <span className="eye right"></span>
                    <span className="smile"></span>
                  </div>
                  <div className="phone-actions">
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lino-problem-section" aria-labelledby="lino-problem-title">
            <h2 id="lino-problem-title">¿Qué pasa cuando sabes que no estas bien <span>,</span> pero no sabes por dónde empezar<span>,</span> <span className="soft-comma">,</span> ?</h2>
            <p>El cuidado de la salud mental puede comenzar con algo tan sencillo como reconocer una emoción, buscar información o querer hablar con alguien. Sin embargo, encontrar ese primer paso no siempre es fácil.</p>
            <div className="lino-percent">83%</div>
            <p className="lino-percent-note">de los usuarios entrevistados manifestaron interés en tener contacto virtual con un profesional.</p>
          </section>

          <section className="lino-story-section">
            <p>Lino surge como una propuesta para hacer ese proceso más cercano y accesible, reuniendo en un mismo espacio herramientas de autocuidado, acompañamiento y acceso a profesionales.</p>
            <div className="lino-app-showcase">
              <div className="feature-pill feature-pill-top">Meditaciones</div>
              <div className="feature-pill feature-pill-left">Encuentra un profesional</div>
              <div className="feature-pill feature-pill-right">LinoBot</div>
              <div className="phone-showcase">
                <div className="phone-showcase-screen">
                  <div className="screen-chips">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="screen-graph"></div>
                </div>
              </div>
            </div>
            <div className="lino-meta">
              <span>Duración: 6 meses</span>
              <span>Rol: UX/UI Designer</span>
            </div>
          </section>

          <section className="lino-challenge-section">
            <h3>El reto</h3>
            <p>¿Cómo diseñar una experiencia digital que facilite el cuidado del bienestar emocional sin convertirse en otra obligación para el usuario?</p>
          </section>

          <section className="lino-solution-section" id="project-result">
            <div className="lino-solution-copy">
              <h3>Solución</h3>
              <p>La solución surge de nuestra investigación, donde identificamos que la mayoría de los usuarios no utilizaba aplicaciones de salud mental, pero el 83% manifestó interés en tener contacto virtual con un profesional. A partir de estos hallazgos, diseñamos Lino como un espacio que acompaña al usuario desde reconocer cómo se siente hasta encontrar el apoyo que necesita, integrando herramientas como el mood tracker, chatbot, rachas, recursos, profesionales y botón de crisis.</p>
            </div>
            <div className="lino-video-placeholder">
              <img
                className="lino-project-image"
                src={linoFrameSix}
                alt="Pantalla del proyecto Lino con la experiencia de bienestar emocional"
              />
            </div>
          </section>

          <section className="lino-cta-section">
            <p>¿Y si cuidar de ti pudiera empezar con una conversación?</p>
            <div className="lino-signature">Lino</div>
            <div className="lino-signature-sub">Reconocer · Acompañar · Conectar</div>
          </section>
        </>
      ) : (
        <>
          <section className="lino-hero" id="project-overview">
            <div className="lino-hero-copy">
              <img src={caseStudy.logo} alt={caseStudy.logoAlt} className="lino-logo-image" />
              <span className="lino-eyebrow">{caseStudy.eyebrow}</span>
              <h1>{caseStudy.title}</h1>
              <p>{caseStudy.intro}</p>
            </div>
            <div className="project-brand-stage" aria-hidden="true">
              <div className="project-brand-orbit orbit-one"></div>
              <div className="project-brand-orbit orbit-two"></div>
              <div className="project-brand-mark">
                <img src={caseStudy.logo} alt="" />
              </div>
            </div>
          </section>

          {project.id === 'proj1' && (
            <section className="lino-journey" aria-labelledby="lino-journey-title">
              <div className="lino-journey-heading">
                <div>
                  <span className="lino-eyebrow">DETRÁS DE LA EXPERIENCIA</span>
                  <h2 id="lino-journey-title">Del problema a una app que acompaña.</h2>
                </div>
                <p>Explora las decisiones que dieron forma a Lino.</p>
              </div>
              <div className="lino-stage-tabs" role="tablist" aria-label="Etapas del proyecto Lino">
                {linoStages.map((stage, index) => (
                  <button
                    className={activeLinoStage === index ? 'is-active' : ''}
                    key={stage.kicker}
                    onClick={() => setActiveLinoStage(index)}
                    role="tab"
                    aria-selected={activeLinoStage === index}
                    aria-controls={`lino-stage-panel-${index}`}
                  >
                    <span>0{index + 1}</span>
                    {stage.kicker.split(' · ')[1]}
                  </button>
                ))}
              </div>
              <div className="lino-stage-panel" id={`lino-stage-panel-${activeLinoStage}`} role="tabpanel">
                <div className="lino-stage-copy">
                  <span className="lino-stage-kicker">{linoStages[activeLinoStage].kicker}</span>
                  <h3>{linoStages[activeLinoStage].title}</h3>
                  <p>{linoStages[activeLinoStage].text}</p>
                  <div className="lino-stage-progress" aria-hidden="true">
                    {linoStages.map((stage, index) => <span className={index <= activeLinoStage ? 'is-filled' : ''} key={stage.kicker} />)}
                  </div>
                </div>
                <div className={`lino-stage-visual ${linoStages[activeLinoStage].visual}`} aria-hidden="true">
                  <span className="stage-orbit stage-orbit-one" />
                  <span className="stage-orbit stage-orbit-two" />
                  <span className="stage-card stage-card-main" />
                  <span className="stage-card stage-card-small" />
                  <span className="stage-sticker">LINO</span>
                </div>
              </div>
            </section>
          )}

          <section className={`lino-info-grid${isLinoOrSommy ? ' lino-info-grid-four' : ''}`}>
            <div className="lino-info-card">
              <div className="lino-info-card-topline">
                <span className="lino-info-card-number">01</span>
                <FileText size={19} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h2>Descripción</h2>
              <p>{caseStudy.description}</p>
            </div>
            {isLinoOrSommy && (
              <div className="lino-info-card" id="project-question">
                <div className="lino-info-card-topline">
                  <span className="lino-info-card-number">02</span>
                  <HelpCircle size={19} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h2>Pregunta</h2>
                <p>{caseStudy.question}</p>
              </div>
            )}
            <div className="lino-info-card" id={isLinoOrSommy ? 'project-role' : undefined}>
              <div className="lino-info-card-topline">
                <span className="lino-info-card-number">03</span>
                <UserRound size={19} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h2>Mi rol</h2>
              <p>{caseStudy.role}</p>
            </div>
            {isLinoOrSommy && (
              <div className="lino-info-card">
                <div className="lino-info-card-topline">
                  <span className="lino-info-card-number">04</span>
                  <Sparkles size={19} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h2>Resultado</h2>
                <p>{caseStudy.resultDescription}</p>
              </div>
            )}
          </section>

          {!isLinoOrSommy && (
            <section className="lino-process-section" id="project-process">
              <h2>Proceso</h2>
              <div className="lino-process-steps">
                {caseStudy.process.map((step, index) => (
                  <div className="lino-process-step" key={step}>
                    <div className="lino-step-number">{String(index + 1).padStart(2, '0')}</div>
                    <strong>{step}</strong>
                    <span>{['Punto de partida', 'Hallazgo clave', 'Propuesta visual', 'Prueba con usuarios', 'Ajustes finales'][index]}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="lino-result-section" id="project-result">
            <div>
              <span className="lino-eyebrow">RESULTADO</span>
              <h2>{caseStudy.result}</h2>
              <p>{caseStudy.resultDescription}</p>
            </div>
            <div className="lino-video-placeholder">
              {project.id === 'proj1' ? (
                <video
                  className="lino-project-video"
                  src={cloudinaryVideos.lino}
                  poster="/LINO_LOGO.png"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Video del proyecto ${caseStudy.title}`}
                />
              ) : (
                <img src={caseStudy.logo} alt={caseStudy.logoAlt} className="project-result-logo" />
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default function ComputerModal({ onClose, isLampOn = true }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const screenBodyRef = useRef(null);

  const projects = [
    {
      id: 'proj1',
      title: 'App Móvil - Fintech UX/UI',
      category: 'Case Study UX/UI',
      folderColor: '#ec4899',
      date: '2024',
      summary: 'Rediseño integral de la experiencia de onboarding y finanzas personales.',
      description: 'Investigación con usuarios, mapas de empatía, wireframes de baja fidelidad y prototipo interactivo en Figma de alta fidelidad.',
      tags: ['Figma', 'UX Research', 'Design System', 'Prototyping'],
      figmaLink: 'https://figma.com',
    },
    {
      id: 'proj2',
      title: 'E-Commerce de Moda Sostenible',
      category: 'Web Design & Frontend',
      folderColor: '#8b5cf6',
      date: '2024',
      summary: 'Plataforma web enfocada en reducir la huella de carbono textil con checkout simplificado.',
      description: 'Diseño responsive de 12 pantallas con foco en microinteracciones y alta conversión visual.',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI Kit'],
      figmaLink: 'https://figma.com',
    },
    {
      id: 'proj3',
      title: 'Plataforma EduTech Gamificada',
      category: 'Diseño de Producto & Gamificación',
      folderColor: '#10b981',
      date: '2023',
      summary: 'Sistema de recompensas e insignias para cursos en línea interactivos.',
      description: 'Creación de componentes accesibles, paleta cromática vibrante e ilustraciones vectoriales personalizadas.',
      tags: ['Illustrator', 'UX Metrics', 'Figma'],
      figmaLink: 'https://figma.com',
    }
  ];

  const projectFolders = [
    { label: 'lino', iconClass: 'app-icon-lino', logo: '/LINO_LOGO.png', project: projects[0] },
    { label: 'sommy', iconClass: 'app-icon-sommy', logo: '/Sommy_logo.png', project: projects[1] },
    { label: 'bioancestría', iconClass: 'app-icon-bio', logo: '/Bioancestria_logo.png', project: projects[2] }
  ];

  const getProjectPages = (project) => [
    {
      title: 'Resumen',
      subtitle: 'Idea central del proyecto',
      body: project.summary,
      accent: '✨'
    },
    {
      title: 'Proceso & Solución',
      subtitle: 'Cómo se construyó la propuesta',
      body: project.description,
      accent: '🛠️'
    },
    {
      title: 'Herramientas',
      subtitle: 'Stack creativo y técnico',
      tags: project.tags,
      accent: '🧩'
    },
    {
      title: 'Impacto',
      subtitle: 'Contexto y alcance del trabajo',
      body: `${project.category} · ${project.date}`,
      accent: '🚀'
    }
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActivePage(0);
  };

  const currentPage = selectedProject ? getProjectPages(selectedProject)[activePage] : null;

  useEffect(() => {
    screenBodyRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [selectedProject]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container computer-window" onClick={(e) => e.stopPropagation()}>
        
        {!selectedProject && (
          <button
            className="computer-home-btn"
            onClick={onClose}
            aria-label="Volver al escritorio"
            title="Volver al escritorio"
          >
            <Home size={20} />
          </button>
        )}
        {/* Laptop Screen Body */}
        <div className="computer-screen-body" ref={screenBodyRef}>
          
          {!selectedProject ? (
            <div className="computer-screen-image-view">
              <img
                src={isLampOn ? darkScreenImage : screenImage}
                alt="Pantalla del computador con fondo de corazones"
                className="computer-screen-image"
              />
              <div className="projects-folders-overlay">
                {projectFolders.map(({ label, iconClass, logo, project }) => (
                  <button
                    key={label}
                    className="desktop-app-shortcut"
                    onClick={() => handleOpenProject(project)}
                    aria-label={`Abrir aplicación ${label}`}
                  >
                    <img
                      src={logo}
                      alt={`Logo de ${label}`}
                      className={`desktop-app-icon ${iconClass}`}
                    />
                    <span className="desktop-app-label">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Selected Case Study Project Details */
            <ProjectCaseStudy project={selectedProject} onBack={() => setSelectedProject(null)} />
          )}

        </div>

      </div>
    </div>
  );
}
