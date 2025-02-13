"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
                <p className="text-gray-600 mb-4">
                    Bienvenido a <strong>TomiNavel</strong>. Al acceder a este sitio web, aceptas los siguientes términos y condiciones.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Propiedad intelectual</h2>
                <p className="text-gray-600">
                    Todo el contenido de este sitio, incluyendo textos, imágenes, código y otros elementos, es propiedad de TomiNavel, salvo que se indique lo contrario. No está permitido su uso sin autorización.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso del sitio</h2>
                <p className="text-gray-600">
                    El contenido de este portafolio es solo para fines informativos y demostrativos. No se garantiza la exactitud ni disponibilidad del mismo en todo momento.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Responsabilidad</h2>
                <p className="text-gray-600">
                    No nos hacemos responsables por el uso indebido del contenido de este sitio ni por daños derivados del acceso o uso de la información aquí contenida.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies y privacidad</h2>
                <p className="text-gray-600">
                    Este sitio puede utilizar cookies para mejorar la experiencia del usuario. Puedes gestionar las cookies en la configuración de tu navegador.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Modificaciones</h2>
                <p className="text-gray-600">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones serán publicadas en esta página.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Contacto</h2>
                <p className="text-gray-600">
                    Si tienes preguntas sobre estos términos, puedes contactarnos a través de la sección de Contacto.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
