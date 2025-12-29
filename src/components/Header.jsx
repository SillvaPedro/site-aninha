import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, menuOpen, setMenuOpen }) {
    return ( <
        header className = "bg-[rgb(250,240,230)] shadow-md sticky top-0 z-50" >
        <
        div className = "container mx-auto px-4 py-4 flex justify-between items-center" >

        <
        h1 className = "text-2xl font-bold text-[rgb(150,120,90)]" >
        Ana Beatriz - Makeup Stúdio <
        /h1>

        <
        button onClick = {
            () => setMenuOpen(!menuOpen)
        }
        className = "md:hidden text-[rgb(150,120,90)]" > { menuOpen ? < X size = { 24 } /> : <Menu size={24} / > } <
        /button>

        <
        nav className = "hidden md:flex gap-6" > {
            ['home', 'servicos', 'portfolio', 'agendamento', 'contato'].map((section) => ( <
                button key = { section }
                onClick = {
                    () => setActiveSection(section)
                }
                className = { `capitalize transition-colors ${
                activeSection === section
                  ? 'text-[rgb(150,120,90)] font-semibold'
                  : 'text-[rgb(120,100,80)] hover:text-[rgb(170,140,110)]'
              }` } > {
                    section === 'home' ?
                    'Início' : section === 'servicos' ?
                        'Serviços' : section === 'portfolio' ?
                        'Portfólio' : section
                } <
                /button>
            ))
        } <
        /nav> < /
        div >

        {
            menuOpen && ( <
                nav className = "md:hidden bg-[rgb(238,232,205)] border-t px-4 py-3 flex flex-col gap-3" > {
                    ['home', 'servicos', 'portfolio', 'agendamento', 'contato'].map((section) => ( <
                        button key = { section }
                        onClick = {
                            () => {
                                setActiveSection(section);
                                setMenuOpen(false);
                            }
                        }
                        className = { `capitalize text-left py-2 ${
                activeSection === section
                  ? 'text-[rgb(150,120,90)] font-semibold'
                  : 'text-[rgb(120,100,80)]'
              }` } > {
                            section === 'home' ?
                            'Início' : section === 'servicos' ?
                                'Serviços' : section === 'portfolio' ?
                                'Portfólio' : section
                        } <
                        /button>
                    ))
                } <
                /nav>
            )
        } <
        /header>
    );
}