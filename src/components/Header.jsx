import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, menuOpen, setMenuOpen }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Beleza Profissional
        </h1>
        
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex gap-6">
          {['home', 'servicos', 'portfolio', 'agendamento', 'contato'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section ? 'text-pink-500 font-semibold' : 'text-gray-700 hover:text-pink-400'
              }`}
            >
              {section === 'home' ? 'Início' : section === 'servicos' ? 'Serviços' : section === 'portfolio' ? 'Portfólio' : section}
            </button>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {['home', 'servicos', 'portfolio', 'agendamento', 'contato'].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setMenuOpen(false);
              }}
              className={`capitalize text-left py-2 ${
                activeSection === section ? 'text-pink-500 font-semibold' : 'text-gray-700'
              }`}
            >
              {section === 'home' ? 'Início' : section === 'servicos' ? 'Serviços' : section === 'portfolio' ? 'Portfólio' : section}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}