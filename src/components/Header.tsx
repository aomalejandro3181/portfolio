'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-foreground/10 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-foreground/10">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
