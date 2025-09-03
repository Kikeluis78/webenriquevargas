import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Globe,
  CreditCard,
  Smartphone,
  Package,
  ShieldCheck,
  Palette,
  Users,
} from "lucide-react";
import Accordion from "../components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

function Precios2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-6 py-10 space-y-12">
      {/* Botones superiores */}
      <div
        className="flex flex-col sm:flex-row justify-center gap-4"
        data-aos="fade-down"
      >
        <Link
          to="/precios"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-400
 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🌐 Página Básica
        </Link>
        <Link
          to="/precios2"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg  bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500
 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🚀 Precios Pro
        </Link>
      </div>

      {/* Card Tienda Online */}
      <div
        className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(0,255,200,0.3)] p-6 sm:p-8 max-w-md sm:max-w-lg md:max-w-xl w-full text-center border border-teal-400/40"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl sm:text-3xl md:text-4xl">🛒</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Tienda Online
          </h2>
        </div>

        <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
          Todo lo que necesitas para vender en línea de manera profesional y
          segura.
        </p>
        <ul className="text-left space-y-3 text-gray-200 text-sm sm:text-base">
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400" /> Dominio y hosting
            confiable
          </li>
          <li className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-green-400" /> Carrito de
            compras integrado
          </li>
          <li className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-yellow-400" /> Pasarela de pago
            segura (PayPal, tarjetas, etc.)
          </li>
          <li className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-pink-400" /> Diseño 100%
            responsive
          </li>
          <li className="flex items-center gap-3">
            <Package className="w-5 h-5 text-purple-400" /> Gestión de
            inventario y productos
          </li>
          <li className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-400" /> Seguridad SSL y
            protección de datos
          </li>
          <li className="flex items-center gap-3">
            <Users className="w-5 h-5 text-orange-400" /> Respuesta más rápida
            para tus clientes
          </li>
          <li className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-pink-400" /> Diseño moderno y
            personalizado
          </li>
        </ul>

        {/* Precio */}
        <div className="mt-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
            Desde $3,999 MXN
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            *Precio único, sin costos ocultos
          </p>
        </div>
        {/* Botón contratar */}
        <Link
          to="/contacto"
          className="mt-6 block w-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-400 via-yellow-200 to-pink-500
        hover:opacity-95 text-black font-semibold rounded-xl shadow-lg shadow-blue-300/30 transition"
        >
          ¡Comprar Plan!
        </Link>
      </div>

      {/* Card Página Web Personalizada */}
      <div
        className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(255,0,150,0.3)] p-6 sm:p-8 max-w-md sm:max-w-lg md:max-w-xl w-full text-center border border-pink-400/40"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center mb-3">
          <span className="text-2xl sm:text-3xl md:text-4xl">💻</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
            Página Web Personalizada
          </h2>
        </div>

        <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
          Soluciones web a medida, con funcionalidades avanzadas y diseño único.
        </p>
        <ul className="text-left space-y-3 text-gray-200 text-sm sm:text-base">
          <li className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-pink-400" /> Diseño totalmente
            personalizado
          </li>
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400" /> Optimización SEO
            avanzada
          </li>
          <li className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-green-400" /> Compatible con
            todos los dispositivos
          </li>
          <li className="flex items-center gap-3">
            <Users className="w-5 h-5 text-orange-400" /> Integración con CRM y
            marketing
          </li>
          <li className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400" /> Seguridad
            avanzada y backups automáticos
          </li>
          <li className="flex items-center gap-3">
            <Package className="w-5 h-5 text-yellow-400" /> Funcionalidades
            especiales según tu negocio
          </li>
        </ul>

        {/* Precio */}
        <div className="mt-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
            Desde $3,999 MXN
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            *Precio único, sin costos ocultos
          </p>
        </div>

        {/* Botón contratar */}
        <Link
          to="/contacto"
          className="mt-6 block w-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-400 via-yellow-200 to-pink-500
        hover:opacity-95 text-black font-semibold rounded-xl shadow-lg shadow-blue-300/30 transition"
        >
          ¡Comprar Plan!
        </Link>
      </div>

      {/* Card pequeña Aplicaciones Android */}
      <div
        className="bg-gray-900/80 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(0,200,255,0.3)] p-4 max-w-sm w-full text-center border border-cyan-400/40"
        data-aos="fade-up"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-teal-400">
          📱 Aplicaciones Android
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Desarrollamos apps Android que se integran con tu tienda o página
          personalizada.
        </p>
        {/* Precio */}
        <div className="mt-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
            Desde $3,999 MXN
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            *Precio único, sin costos ocultos
          </p>
        </div>
        {/* Botón contratar */}
        <Link
          to="/contacto"
          className="mt-6 block w-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-400 via-yellow-200 to-pink-500
        hover:opacity-95 text-black font-semibold rounded-xl shadow-lg shadow-blue-300/30 transition"
        >
          ¡Cotizar o Comprar!
        </Link>
      </div>

      {/* Preguntas Frecuentes */}
      <div
        className="max-w-2xl w-full mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl">❓</span>
          <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-amber-300">
            Preguntas
          </h2>
          <p className="text-xl sm:text-3xl md:text-3xl font-bold text-blue-300">
            Frecuentes
          </p>
        </div>

        <Accordion
          question="⏳ ¿Cuánto tiempo tarda en estar lista mi tienda online?"
          answer="Depende de la complejidad, generalmente entre 10 y 15 días hábiles."
        />
        <Accordion
          question="💳 ¿Puedo aceptar varios métodos de pago?"
          answer="Sí, integraciones con tarjetas, PayPal, transferencia bancaria y más."
        />
        <Accordion
          question="📱 ¿Se verá bien en móviles y tablets?"
          answer="Totalmente, todo es responsive y adaptable a cualquier dispositivo."
        />
        <Accordion
          question="🔄 ¿Puedo actualizar productos o funcionalidades?"
          answer="Sí, tendrás acceso al panel de administración para cambios ilimitados."
        />
      </div>
    </div>
  );
}

export default Precios2;
