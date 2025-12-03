'use client';

import { useState, useEffect } from 'react';

interface HubSpotFormProps {
  language: string;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function HubSpotForm({ language }: HubSpotFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const t = language === 'es' ? {
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    submit: 'Enviar',
    sending: 'Enviando...',
    success: '¡Gracias! Su mensaje ha sido enviado.',
    error: 'Ocurrió un error. Por favor intente nuevamente.',
  } : {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    sending: 'Sending...',
    success: 'Thank you! Your message has been sent.',
    error: 'An error occurred. Please try again.',
  };

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LesaQgsAAAAAB3XaSeqZBpWT8-mcS073XKL_fTI';
    script.async = true;
    script.defer = true;
    script.onload = () => {};
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Get reCAPTCHA v3 token if available
      if (window.grecaptcha) {
        await window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute('6LesaQgsAAAAAB3XaSeqZBpWT8-mcS073XKL_fTI', { action: 'submit' });
            formData.append('g-recaptcha-response', token);
          } catch (recaptchaError) {
            console.log('reCAPTCHA error:', recaptchaError);
          }

          // Submit form
          try {
            const response = await fetch('https://formspree.io/f/xzzybbdw', {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            });

            if (response.ok) {
              setStatus('success');
              form.reset();
            } else {
              const errorData = await response.json();
              console.error('Formspree error:', errorData);
              setStatus('error');
            }
          } catch (fetchError) {
            console.error('Fetch error:', fetchError);
            setStatus('error');
          }
        });
      } else {
        // Submit without reCAPTCHA if not loaded
        const response = await fetch('https://formspree.io/f/xzzybbdw', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            {t.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-neutral-900 text-white px-8 py-4 rounded-md hover:bg-neutral-700 transition-colors font-medium text-lg disabled:opacity-50"
        >
          {status === 'submitting' ? t.sending : t.submit}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center">{t.success}</p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-center">{t.error}</p>
        )}
      </form>
    </div>
  );
}
