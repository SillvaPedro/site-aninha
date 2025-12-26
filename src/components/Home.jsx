import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/services';

export default function Home({ setActiveSection }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Realce Sua Beleza Natural
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Maquiagem profissional para todos os momentos especiais da sua vida
        </p>
        <button
          onClick={() => setActiveSection('agendamento')}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Agende Agora
        </button>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
            <p className="font-semibold text-pink-500">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}