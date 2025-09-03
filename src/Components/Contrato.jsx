// src/components/Contrato.jsx
import { jsPDF } from "jspdf";

export default function Contrato({ datosCliente }) {
  const generarPDF = () => {
    if (!datosCliente) return;

    const doc = new jsPDF("p", "mm", "a4");

    // Título
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.text("Contrato de Servicio de Desarrollo Web", 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Datos del cliente
    doc.text(`Nombre: ${datosCliente.nombre}`, 20, 40);
    doc.text(`Negocio: ${datosCliente.negocio}`, 20, 50);
    doc.text(`Giro: ${datosCliente.giro}`, 20, 60);
    doc.text(`Teléfono: ${datosCliente.telefono}`, 20, 70);
    doc.text(`Correo: ${datosCliente.correo}`, 20, 80);

    // Contenido del contrato (borrador)
    const contenido = `
Este contrato establece los términos y condiciones del servicio de desarrollo web entre el proveedor y el cliente. 
El proveedor se compromete a entregar la aplicación web funcional según las especificaciones acordadas.

1. Firma del contrato: El cliente reconoce haber leído y aceptado los términos.
2. Anticipo del 50%: Se abonará para iniciar el desarrollo.
3. Revisión y aprobación: El cliente revisará los avances y dará su aprobación.
4. Publicación en internet: La solución será visible en línea tras la aprobación.
5. Pago final: El cliente liquidará el monto restante al finalizar el proyecto.
    `;

    doc.text(contenido, 20, 100, { maxWidth: 170, lineHeightFactor: 1.3 });

    // Firma
    doc.text("Firma del cliente: __________________________", 20, 250);

    // Guardar PDF
    doc.save(`Contrato_${datosCliente.nombre}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <button
        onClick={generarPDF}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition"
      >
        Descargar Contrato
      </button>
    </div>
  );
}
