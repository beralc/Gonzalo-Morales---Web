import React from 'react';
import { Language, languages } from '@/lib/i18n';

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = (lang === 'en' || lang === 'es' ? lang : 'en') as Language;

  return (
    <div className="min-h-screen py-12 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
            {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
          </h1>
          <p className="text-sm text-neutral-500 mb-8 pb-8 border-b border-neutral-200">
            {language === 'en' ? 'Last updated: ' : 'Última actualización: '}{new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
          </p>

          <div className="prose prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-neutral-800 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-neutral-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-neutral-700 [&_ul]:space-y-2 [&_li]:ml-6">
          {language === 'en' ? (
            <>
              <h2>Introduction</h2>
              <p>
                This Privacy Policy describes how gonzalomorales.net ("we", "us", or "our") collects, uses, and shares information about you when you visit our website.
              </p>

              <h2>Information We Collect</h2>
              <h3>Information You Provide</h3>
              <p>
                When you contact us through our website, we may collect:
              </p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul>
                <li>Your IP address</li>
                <li>Browser type and version</li>
                <li>Pages you visit on our site</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and trends</li>
                <li>Protect against fraud and abuse</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or serving our users.
              </p>

              <h2>Your Rights (GDPR)</h2>
              <p>
                If you are located in the European Economic Area, you have certain rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </>
          ) : (
            <>
              <h2>Introducción</h2>
              <p>
                Esta Política de Privacidad describe cómo gonzalomorales.net ("nosotros" o "nuestro") recopila, usa y comparte información sobre usted cuando visita nuestro sitio web.
              </p>

              <h2>Información que Recopilamos</h2>
              <h3>Información que Usted Proporciona</h3>
              <p>
                Cuando nos contacta a través de nuestro sitio web, podemos recopilar:
              </p>
              <ul>
                <li>Su nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Contenido del mensaje</li>
                <li>Cualquier otra información que decida proporcionar</li>
              </ul>

              <h3>Información Recopilada Automáticamente</h3>
              <p>
                Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información, incluyendo:
              </p>
              <ul>
                <li>Su dirección IP</li>
                <li>Tipo y versión del navegador</li>
                <li>Páginas que visita en nuestro sitio</li>
                <li>Hora y fecha de su visita</li>
                <li>Tiempo dedicado a las páginas</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                Utilizamos cookies para mejorar su experiencia de navegación. Puede elegir aceptar o rechazar cookies a través de la configuración de su navegador.
              </p>

              <h2>Cómo Usamos Su Información</h2>
              <p>Utilizamos la información que recopilamos para:</p>
              <ul>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Analizar el uso y las tendencias del sitio web</li>
                <li>Proteger contra fraudes y abusos</li>
              </ul>

              <h2>Compartir Información</h2>
              <p>
                No vendemos, intercambiamos ni transferimos su información personal identificable a terceros. Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web.
              </p>

              <h2>Sus Derechos (RGPD)</h2>
              <p>
                Si se encuentra en el Espacio Económico Europeo, tiene ciertos derechos bajo el Reglamento General de Protección de Datos (RGPD):
              </p>
              <ul>
                <li>Derecho de acceso a sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho al olvido</li>
                <li>Derecho a restringir el procesamiento</li>
                <li>Derecho a la portabilidad de datos</li>
                <li>Derecho a oponerse al procesamiento</li>
              </ul>

              <h2>Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad apropiadas para proteger su información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
              </p>

              <h2>Privacidad de Menores</h2>
              <p>
                Nuestro sitio web no está dirigido a menores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años.
              </p>

              <h2>Cambios a Esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página.
              </p>

              <h2>Contáctenos</h2>
              <p>
                Si tiene preguntas sobre esta Política de Privacidad, contáctenos a través de nuestra página de contacto.
              </p>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
