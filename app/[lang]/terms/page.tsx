import React from 'react';
import { Language, languages } from '@/lib/i18n';

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function TermsPage({
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
            {language === 'en' ? 'Terms and Conditions' : 'Términos y Condiciones'}
          </h1>
          <p className="text-sm text-neutral-500 mb-8 pb-8 border-b border-neutral-200">
            {language === 'en' ? 'Last updated: ' : 'Última actualización: '}{new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
          </p>

          <div className="prose prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-neutral-800 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-neutral-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-neutral-700 [&_ul]:space-y-2 [&_li]:ml-6">
          {language === 'en' ? (
            <>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using gonzalomorales.net (the "Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this Website.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>
                All content on this Website, including but not limited to artwork images, photographs, text, graphics, logos, and design, is the property of the Gonzalo Morales Sáurez Estate and is protected by international copyright laws.
              </p>
              <p>
                The artworks of Gonzalo Morales Sáurez remain the intellectual property of his estate. Unauthorized reproduction, distribution, or commercial use of any artwork is strictly prohibited without express written permission.
              </p>

              <h2>3. Use of Website Content</h2>
              <h3>Permitted Uses</h3>
              <p>You may:</p>
              <ul>
                <li>View and browse the Website for personal, non-commercial purposes</li>
                <li>Share links to the Website on social media</li>
                <li>Reference artworks for educational or editorial purposes with proper attribution</li>
              </ul>

              <h3>Prohibited Uses</h3>
              <p>You may not:</p>
              <ul>
                <li>Download, copy, or reproduce artwork images for commercial purposes</li>
                <li>Create derivative works based on the artworks</li>
                <li>Remove or alter any copyright notices or watermarks</li>
                <li>Use the content in any way that infringes on intellectual property rights</li>
                <li>Use automated systems (bots, scrapers) to access the Website</li>
              </ul>

              <h2>4. Art Prints and Licensing</h2>
              <p>
                All inquiries regarding art prints, licensing, or commercial use of Gonzalo Morales Sáurez's artworks must be directed through our official contact form. Pricing and availability are subject to change without notice.
              </p>
              <p>
                Any licensing agreements must be made in writing with the estate representatives. Unauthorized use may result in legal action.
              </p>

              <h2>5. Accuracy of Information</h2>
              <p>
                While we strive to ensure the accuracy of all information on this Website, including artwork titles, dates, and exhibition history, we cannot guarantee complete accuracy. Information is subject to correction and update without notice.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                This Website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. Access to third-party sites is at your own risk.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, the Gonzalo Morales Sáurez Estate and this Website shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this Website.
              </p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>
                This Website is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h2>9. Privacy</h2>
              <p>
                Your use of this Website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Costa Rica, without regard to its conflict of law provisions.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website following any changes constitutes acceptance of those changes.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                For questions regarding these Terms and Conditions, licensing inquiries, or any other matters, please contact us through our contact page.
              </p>

              <h2>13. Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </>
          ) : (
            <>
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al acceder y usar gonzalomorales.net (el "Sitio Web"), usted acepta y se compromete a cumplir con estos Términos y Condiciones. Si no está de acuerdo con estos términos, por favor no utilice este Sitio Web.
              </p>

              <h2>2. Derechos de Propiedad Intelectual</h2>
              <p>
                Todo el contenido de este Sitio Web, incluyendo pero no limitado a imágenes de obras de arte, fotografías, texto, gráficos, logotipos y diseño, es propiedad del Legado de Gonzalo Morales Sáurez y está protegido por leyes internacionales de derechos de autor.
              </p>
              <p>
                Las obras de arte de Gonzalo Morales Sáurez siguen siendo propiedad intelectual de su legado. La reproducción, distribución o uso comercial no autorizado de cualquier obra de arte está estrictamente prohibido sin permiso expreso por escrito.
              </p>

              <h2>3. Uso del Contenido del Sitio Web</h2>
              <h3>Usos Permitidos</h3>
              <p>Usted puede:</p>
              <ul>
                <li>Ver y navegar el Sitio Web con fines personales y no comerciales</li>
                <li>Compartir enlaces al Sitio Web en redes sociales</li>
                <li>Hacer referencia a obras de arte con fines educativos o editoriales con la debida atribución</li>
              </ul>

              <h3>Usos Prohibidos</h3>
              <p>Usted no puede:</p>
              <ul>
                <li>Descargar, copiar o reproducir imágenes de obras de arte con fines comerciales</li>
                <li>Crear obras derivadas basadas en las obras de arte</li>
                <li>Eliminar o alterar avisos de derechos de autor o marcas de agua</li>
                <li>Usar el contenido de cualquier manera que infrinja los derechos de propiedad intelectual</li>
                <li>Usar sistemas automatizados (bots, scrapers) para acceder al Sitio Web</li>
              </ul>

              <h2>4. Impresiones de Arte y Licencias</h2>
              <p>
                Todas las consultas sobre impresiones de arte, licencias o uso comercial de las obras de Gonzalo Morales Sáurez deben dirigirse a través de nuestro formulario de contacto oficial. Los precios y disponibilidad están sujetos a cambios sin previo aviso.
              </p>
              <p>
                Cualquier acuerdo de licencia debe hacerse por escrito con los representantes del legado. El uso no autorizado puede resultar en acciones legales.
              </p>

              <h2>5. Precisión de la Información</h2>
              <p>
                Aunque nos esforzamos por garantizar la precisión de toda la información en este Sitio Web, incluyendo títulos de obras, fechas e historial de exposiciones, no podemos garantizar una precisión completa. La información está sujeta a corrección y actualización sin previo aviso.
              </p>

              <h2>6. Enlaces de Terceros</h2>
              <p>
                Este Sitio Web puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de ningún sitio de terceros. El acceso a sitios de terceros es bajo su propio riesgo.
              </p>

              <h2>7. Limitación de Responsabilidad</h2>
              <p>
                En la máxima medida permitida por la ley, el Legado de Gonzalo Morales Sáurez y este Sitio Web no serán responsables de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja de su uso o incapacidad para usar este Sitio Web.
              </p>

              <h2>8. Descargo de Garantías</h2>
              <p>
                Este Sitio Web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitado a garantías de comerciabilidad, idoneidad para un propósito particular o no infracción.
              </p>

              <h2>9. Privacidad</h2>
              <p>
                Su uso de este Sitio Web también está regido por nuestra Política de Privacidad. Por favor revise nuestra Política de Privacidad para entender nuestras prácticas con respecto a la recopilación y uso de su información.
              </p>

              <h2>10. Ley Aplicable</h2>
              <p>
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Costa Rica, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>

              <h2>11. Cambios en los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el Sitio Web. Su uso continuado del Sitio Web después de cualquier cambio constituye la aceptación de esos cambios.
              </p>

              <h2>12. Información de Contacto</h2>
              <p>
                Para preguntas sobre estos Términos y Condiciones, consultas de licencias o cualquier otro asunto, por favor contáctenos a través de nuestra página de contacto.
              </p>

              <h2>13. Divisibilidad</h2>
              <p>
                Si alguna disposición de estos Términos y Condiciones se considera inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.
              </p>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
