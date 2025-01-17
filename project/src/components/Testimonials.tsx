import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    rank: "Diamond II",
    text: "O Junin me ajudou a subir do Gold para o Diamond em menos de um mês. Profissional incrível!"
  },
  {
    name: "Ana Paula",
    rank: "Platinum I",
    text: "As aulas de coaching são fantásticas. Aprendi muito sobre wave management e rotações."
  },
  {
    name: "Pedro Santos",
    rank: "Master",
    text: "Melhor Diana que já vi. O duo boost foi uma experiência incrível de aprendizado."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-lg relative">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-purple-400">{testimonial.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;