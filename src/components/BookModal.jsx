import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles, BookOpen, Star } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function BookModal({ onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Page 0: Cover / Intro
    {
      title: "📓 DIARIO DE PROYECTOS & SOBRE MÍ",
      subtitle: "Portafolio Creativo 2026",
      type: "intro",
      content: {
        greeting: "¡Hola! Bienvenido a mi casillero personal 🌸",
        bio: "Soy una desarrolladora & diseñadora web apasionada por crear experiencias digitales envolventes, estéticas y de alto rendimiento. Me especializo en combinar diseño retro Y2K / Coquette con código moderno y animaciones 3D.",
        highlights: [
          { label: "Experiencia", value: "3+ Años" },
          { label: "Especialidad", value: "UI/UX & Frontend" },
          { label: "Ubicación", value: "Remoto / Global" }
        ],
        quote: '"El diseño no es solo lo que se ve, sino cómo hace sentir al usuario."'
      }
    },
    // Page 1: Projects Showcase Part 1
    {
      title: "🚀 PROYECTOS DESTACADOS",
      type: "projects",
      projects: [
        {
          name: "NeonVerse 3D E-Commerce",
          category: "Web App / Three.js",
          desc: "Tienda interactiva en 3D con personalización de productos en tiempo real, efectos shaders y pasarela de pago integrados.",
          tech: ["React", "Three.js", "Tailwind", "Node.js"],
          liveUrl: "https://example.com/neonverse",
          githubUrl: "https://github.com/example/neonverse",
          color: "#f472b6"
        },
        {
          name: "CyberPink Social Hub",
          category: "Social Platform / Realtime",
          desc: "Red social temática con mensajería instantánea, avatares personalizados y estética nostálgica retro-futurista.",
          tech: ["React", "WebSockets", "CSS3 3D", "Firebase"],
          liveUrl: "https://example.com/cyberpink",
          githubUrl: "https://github.com/example/cyberpink",
          color: "#ec4899"
        }
      ]
    },
    // Page 2: Projects Showcase Part 2
    {
      title: "✨ MÁS PROYECTOS CREATIVOS",
      type: "projects",
      projects: [
        {
          name: "Aesthetic Soundscape Player",
          category: "Audio App / Web Audio API",
          desc: "Reproductor de música lo-fi y sintetizador ambiental personalizable con visualizador de frecuencias retro.",
          tech: ["JavaScript", "Web Audio API", "HTML5 Canvas"],
          liveUrl: "https://example.com/soundscape",
          githubUrl: "https://github.com/example/soundscape",
          color: "#a855f7"
        },
        {
          name: "Interactive Y2K Locker Portfolio",
          category: "Portfolio / 3D Experience",
          desc: "Portafolio interactivo tipo casillero con objetos 3D interactivos, sonidos sintetizados y pasaporte visual.",
          tech: ["React", "Vite", "3D Transforms", "Web Audio"],
          liveUrl: "#",
          githubUrl: "https://github.com/example/y2k-locker",
          color: "#be185d"
        }
      ]
    },
    // Page 3: Skills & Philosophy
    {
      title: "🌸 SKILLS & HERRAMIENTAS",
      type: "skills",
      categories: [
        {
          title: "Frontend & 3D",
          skills: ["JavaScript (ES6+)", "React.js", "HTML5 / CSS3", "Vite / Next.js", "Three.js & WebGL"]
        },
        {
          title: "Diseño & UI/UX",
          skills: ["Figma & Adobe XD", "Animaciones CSS / Framer", "Design Systems", "Prototipado Interactivo"]
        },
        {
          title: "Herramientas & Workflow",
          skills: ["Git & GitHub", "Vercel / Netlify", "Web Audio API", "Performance Optimization"]
        }
      ]
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      soundManager.playPageFlip();
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      soundManager.playPageFlip();
      setCurrentPage(prev => prev - 1);
    }
  };

  const activePage = pages[currentPage];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-3d book-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>

        {/* Book Header / Ribbon */}
        <div className="book-modal-header">
          <div className="book-ribbon">
            <BookOpen size={20} className="sparkle-icon" />
            <span>Página {currentPage + 1} de {pages.length}</span>
          </div>
        </div>

        {/* Book Spine / Pages Container */}
        <div className="book-body-wrapper">
          <div className="book-page active-page-content">
            <h2 className="page-heading">{activePage.title}</h2>
            {activePage.subtitle && <p className="page-subheading">{activePage.subtitle}</p>}

            {/* Intro Page Content */}
            {activePage.type === 'intro' && (
              <div className="intro-page-layout">
                <p className="intro-greeting">{activePage.content.greeting}</p>
                <p className="intro-bio">{activePage.content.bio}</p>

                <div className="stats-row">
                  {activePage.content.highlights.map((h, i) => (
                    <div key={i} className="stat-card">
                      <span className="stat-value">{h.value}</span>
                      <span className="stat-label">{h.label}</span>
                    </div>
                  ))}
                </div>

                <div className="quote-box">
                  <Star size={16} color="#f472b6" />
                  <p>{activePage.content.quote}</p>
                </div>
              </div>
            )}

            {/* Projects Pages Content */}
            {activePage.type === 'projects' && (
              <div className="projects-grid">
                {activePage.projects.map((proj, idx) => (
                  <div key={idx} className="project-card" style={{ borderLeftColor: proj.color }}>
                    <div className="proj-header">
                      <span className="proj-cat">{proj.category}</span>
                      <h3 className="proj-title">{proj.name}</h3>
                    </div>
                    <p className="proj-desc">{proj.desc}</p>

                    <div className="tech-tags">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                      ))}
                    </div>

                    <div className="proj-links">
                      {proj.liveUrl !== '#' && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="proj-btn primary">
                          <ExternalLink size={14} /> Demo En Vivo
                        </a>
                      )}
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="proj-btn secondary">
                        <Github size={14} /> Ver Código
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Page Content */}
            {activePage.type === 'skills' && (
              <div className="skills-container">
                {activePage.categories.map((cat, idx) => (
                  <div key={idx} className="skill-category-card">
                    <h4>{cat.title}</h4>
                    <div className="skill-pills">
                      {cat.skills.map((s, i) => (
                        <span key={i} className="skill-pill">
                          <Sparkles size={12} color="#ec4899" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Book Footer Controls */}
        <div className="book-modal-footer">
          <button 
            className={`nav-page-btn ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={20} /> Anterior
          </button>

          <div className="page-dots">
            {pages.map((_, i) => (
              <span 
                key={i} 
                className={`page-dot ${i === currentPage ? 'active' : ''}`}
                onClick={() => {
                  soundManager.playPageFlip();
                  setCurrentPage(i);
                }}
              />
            ))}
          </div>

          <button 
            className={`nav-page-btn ${currentPage === pages.length - 1 ? 'disabled' : ''}`}
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
          >
            Siguiente <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
