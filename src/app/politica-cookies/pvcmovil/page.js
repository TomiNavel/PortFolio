import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PoliticaPrivacidadPVCMovil() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto p-6 max-w-3xl">
                <h1 className="text-3xl font-bold mb-4">Política de Privacidad PVCMovil</h1>
                <p className="text-gray-600">Fecha de entrada en vigor: 08/03/2025</p>

                <p className="mt-4">
                    Gracias por utilizar nuestra aplicación <strong>PVCMovil</strong>. La privacidad de nuestros usuarios es una prioridad para nosotros. Esta política de privacidad describe el tratamiento de los datos en la aplicación.
                </p>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">1. Información que recopilamos</h2>
                    <p className="mt-2">
                        <strong>PVCMovil</strong> no recopila ningún dato personal de los usuarios. La aplicación solo requiere credenciales de acceso (<em>usuario</em> y <em>contraseña</em>) para autenticar acceso a los usuarios al servidor, donde se almacenan sus datos de manera segura.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">2. Uso de la información</h2>
                    <p className="mt-2">La aplicación utiliza la información proporcionada por el usuario exclusivamente para:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Permitir el acceso seguro a los datos alojados en el servidor.</li>
                        <li>Garantizar la seguridad de la autenticación mediante el uso de tokens.</li>
                    </ul>
                    <p className="mt-2">
                        <strong>PVCMovil</strong> no comparte información con terceros y no utiliza datos con fines comerciales ni publicitarios.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">3. Seguridad de la información</h2>
                    <p className="mt-2">PVCMovil implementa medidas de seguridad para proteger los datos de acceso, incluyendo:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Autenticación segura con tokens para evitar el almacenamiento de credenciales en el dispositivo.</li>
                        <li>Cifrado de comunicaciones para garantizar la integridad de la información.</li>
                    </ul>
                    <p className="mt-2">Se recomienda a los usuarios mantener sus credenciales seguras y no compartirlas con terceros.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">4. Cambios en la política de privacidad</h2>
                    <p className="mt-2">
                        Podemos actualizar esta política de privacidad en cualquier momento. Se notificará a los usuarios sobre cambios relevantes a través de nuestra página web.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">5. Contacto</h2>
                    <p className="mt-2">
                        Si tienes preguntas sobre esta política de privacidad, puedes escribirnos a:
                    </p>
                    <ul className="mt-2">
                        <li><strong>Correo electrónico:</strong> <a href="mailto:hola@tominavel.com" className="text-blue-600 underline">hola@tominavel.com</a></li>
                        <li><strong>Sitio web:</strong> <a href="https://www.tominavel.com" className="text-blue-600 underline">www.tominavel.com</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}