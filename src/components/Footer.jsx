import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return ( <
        footer className = "bg-[rgb(250,240,230)] text-[rgb(120,100,80)] py-8 mt-16 border-t border-[rgb(238,232,205)]" >
        <
        div className = "container mx-auto px-4 text-center" >

        <
        p className = "mb-4 text-sm" > ©2025. Beleza Profissional.Todos os direitos reservados. <
        /p>

        <
        div className = "flex justify-center gap-6" > { /* Instagram */ } <
        a href = "https://www.instagram.com/anabeatriz_makeupbeauty?igsh=MXhlenp6OXNrZDVtZw=="
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        Instagram className = "cursor-pointer hover:text-pink-400 transition-colors" / >
        <
        /a>

        { /* WhatsApp */ } <
        a href = "https://wa.me/558398064139"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        MessageCircle className = "cursor-pointer transition-colors hover:text-green-400 transition-colors" / >
        <
        /a> < /
        div > <
        /div> < /
        footer >
    );
}