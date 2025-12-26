import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
    return ( <
        section className = "container mx-auto px-4 py-16" >
        <
        h2 className = "text-4xl font-bold text-center mb-12 text-gray-800" > Entre em Contato < /h2> <
        div className = "max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg" >
        <
        div className = "space-y-6" >
        <
        div className = "flex items-center gap-4" >
        <
        div className = "bg-pink-100 p-3 rounded-full" >
        <
        Phone className = "text-pink-500"
        size = { 24 }
        /> < /
        div > <
        div >
        <
        p className = "font-semibold text-gray-800" > Telefone < /p> <
        p className = "text-gray-600" > (47) 99999 - 9999 < /p> < /
        div > <
        /div>

        <
        div className = "flex items-center gap-4" >
        <
        div className = "bg-pink-100 p-3 rounded-full" >
        <
        Mail className = "text-pink-500"
        size = { 24 }
        /> < /
        div > <
        div >
        <
        p className = "font-semibold text-gray-800" > E - mail < /p> <
        p className = "text-gray-600" > contato @belezaprofissional.com < /p> < /
        div > <
        /div>

        <
        div className = "flex items-center gap-4" >
        <
        div className = "bg-pink-100 p-3 rounded-full" >
        <
        Instagram className = "text-pink-500"
        size = { 24 }
        /> < /
        div > <
        div >
        <
        p className = "font-semibold text-gray-800" > Instagram < /p> <
        p className = "text-gray-600" > @belezaprofissional < /p> < /
        div > <
        /div> < /
        div >

        <
        div className = "mt-8 pt-8 border-t" >
        <
        h3 className = "font-semibold text-gray-800 mb-4" > Horário de Atendimento < /h3> <
        p className = "text-gray-600" > Segunda a Sexta: 9 h às 18 h < /p> <
        p className = "text-gray-600" > Sábado: 9 h às 13 h < /p> < /
        div > <
        /div> < /
        section >
    );
}