import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PoliticaCookies() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
                <p className="text-gray-600 mb-4">
                    En <strong>Cuarto y Mita</strong> utilizamos cookies para mejorar la experiencia del usuario.
                    Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con esta política.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. ¿Qué son las cookies?</h2>
                <p className="text-gray-600">
                    Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web.
                    Permiten recordar preferencias, mejorar la navegación y recopilar estadísticas sobre el uso del sitio.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. ¿Qué tipos de cookies usamos?</h2>
                <ul className="list-disc pl-6 text-gray-600">
                    <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
                    <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio (Google Analytics, etc.).</li>
                    <li><strong>Cookies de funcionalidad:</strong> Guardan preferencias del usuario.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. ¿Cómo gestionar las cookies?</h2>
                <p className="text-gray-600">
                    Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies. A continuación, algunos enlaces útiles:
                </p>
                <ul className="list-disc pl-6 text-blue-600 underline">
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/HT201265" target="_blank">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">Internet Explorer/Edge</a></li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Cambios en esta política</h2>
                <p className="text-gray-600">
                    Nos reservamos el derecho de actualizar esta política en cualquier momento.
                </p>
            </div>
            <Footer />
        </>
    );
}
