import React from 'react';
import { Clock } from 'lucide-react';
import { services } from '../data/services';

export default function Services({ setActiveSection }) {
    return ( <
        section className = "container mx-auto px-4 py-16" >
        <
        h2 className = "text-4xl font-bold text-center mb-12 text-gray-800" > Nossos Serviços < /h2> <
        div className = "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" > {
            services.map((service, idx) => ( <
                div key = { idx }
                className = "bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" >
                <
                h3 className = "text-2xl font-bold text-pink-500 mb-3" > { service.name } < /h3> <
                div className = "flex justify-between items-center mb-4" >
                <
                span className = "text-3xl font-bold text-gray-800" > { service.price } < /span> <
                span className = "flex items-center text-gray-600" >
                <
                Clock size = { 18 }
                className = "mr-1" / > { service.duration } <
                /span> < /
                div > <
                button onClick = {
                    () => setActiveSection('agendamento')
                }
                className = "w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" >
                Agendar <
                /button> < /
                div >
            ))
        } <
        /div> < /
        section >
    );
}