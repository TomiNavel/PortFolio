"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookiesBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Verificamos si ya existe la cookie
        const cookiesAccepted = Cookies.get("cookiesAccepted");
        if (!cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookiesAccepted", "true", { expires: 365 }); // Expira en 1 año
        setShowBanner(false);
    };

    return (
        showBanner && (
            <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
                    <Link href="/politica-cookies" className="underline text-blue-400 hover:text-blue-300">
                        política de cookies
                    </Link>
                    .
                </p>
                <button
                    onClick={acceptCookies}
                    className="bg-blue-600 px-4 py-2 text-sm rounded-md mt-2 md:mt-0 hover:bg-blue-500 transition"
                >
                    Aceptar
                </button>
            </div>
        )
    );
};

export default CookiesBanner;
