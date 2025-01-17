import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o processo de EloJob?",
    answer: "Após a contratação, um de nossos jogadores profissionais assumirá sua conta e jogará até atingir o elo desejado. Todo o processo é seguro e monitorado."
  },
  {
    question: "Quanto tempo leva para subir de elo?",
    answer: "O tempo varia dependendo do elo atual e do objetivo. Em média, conseguimos subir uma divisão por dia."
  },
  {
    question: "O Duo Boost é seguro?",
    answer: "Sim! No Duo Boost, você joga junto com o Junin, aprendendo e subindo ao mesmo tempo."
  },
  {
    question: "Como funciona o coaching?",
    answer: "As sessões de coaching são personalizadas, focando em suas dificuldades específicas. Incluem análise de replays, dicas de matchups e estratégias avançadas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg bg-slate-800 flex justify-between items-center ${
                  openIndex === index ? 'bg-slate-700' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-slate-700 rounded-b-lg mt-1">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;