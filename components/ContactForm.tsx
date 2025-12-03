'use client';

import { useState } from 'react';

interface ContactFormProps {
  lang: string;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace this URL with your N8N webhook URL
      const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'YOUR_N8N_WEBHOOK_URL_HERE';

      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: lang,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
          {lang === 'en'
            ? 'Thank you for your message! We will get back to you soon.'
            : '¡Gracias por tu mensaje! Te responderemos pronto.'}
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {lang === 'en'
            ? 'There was an error sending your message. Please try again or email us directly.'
            : 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o envíanos un correo directamente.'}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          {lang === 'en' ? 'Name' : 'Nombre'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          {lang === 'en' ? 'Email' : 'Correo Electrónico'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          {lang === 'en' ? 'Message' : 'Mensaje'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
          required
          disabled={status === 'loading'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-neutral-900 text-white px-8 py-3 rounded-md hover:bg-neutral-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading'
          ? (lang === 'en' ? 'Sending...' : 'Enviando...')
          : (lang === 'en' ? 'Send Message' : 'Enviar Mensaje')}
      </button>
    </form>
  );
}
