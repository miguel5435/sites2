import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <MessageSquare className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">Entre em Contato</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Discord</label>
              <input
                type="text"
                className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                value={formData.discord}
                onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                className="w-full p-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Enviar Mensagem</span>
              <Send className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">Ou entre em contato pelo WhatsApp</p>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-purple-400 hover:text-purple-300"
            >
              +55 (41) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;