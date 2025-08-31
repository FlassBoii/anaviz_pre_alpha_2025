"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Lottie from "lottie-react";
import anotherSearchAnimation from "@/assets/animations/another_search_anaviz.json";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(true); // Abierto por defecto
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  // Manejo de drag & drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  // Selección de archivo
  const handleFileSelect = (file: File) => {
    // Validar tipo de archivo
    const allowedTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Por favor selecciona un archivo Excel (.xls, .xlsx) o CSV");
      return;
    }

    // Validar tamaño (25MB)
    if (file.size > 25 * 1024 * 1024) {
      alert("El archivo es demasiado grande. Máximo 25MB");
      return;
    }

    setSelectedFile(file);
  };

  // Simulación de procesamiento
  const handleProcessFile = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);

    // Simular envío a API (aquí se conectaría con Python)
    try {
      // Simular delay de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Simular respuesta exitosa
      setIsComplete(true);
      setDownloadUrl("#download-link"); // En producción sería la URL real del archivo procesado
    } catch (error) {
      console.error("Error procesando archivo:", error);
      alert("Error procesando el archivo. Intenta de nuevo.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Descarga del archivo
  const handleDownload = () => {
    if (downloadUrl) {
      // En producción, esto descargaría el archivo real
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `processed_${selectedFile?.name || "file"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Reset del modal
  const resetModal = () => {
    setSelectedFile(null);
    setIsProcessing(false);
    setIsComplete(false);
    setDownloadUrl(null);
    setIsModalOpen(true); // Siempre abierto
  };

  return (
    <section
      id="product-showcase"
      ref={sectionRef}
      className="relative z-10 bg-gradient-to-b from-[#FFFFFF]/50 to-[#CAF0F8]/70 py-2 overflow-x-clip backdrop-blur-sm"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag text-2xl mt-5 px-6 py-3">
              Eleva tu rendimiento
            </div>
          </div>
          <h2 className="section-title mt-5">
            Una manera más eficiente de gestionar tus informes
          </h2>
          <p className="section-description mt-5">
            Convierte tus documentos en informes claros y rápidos, diseñados
            para ahorrar tiempo y facilitar decisiones.
          </p>
        </div>

        {/* Modal de subida de archivos - Siempre visible */}
        <div className="relative flex justify-center mt-10 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 border border-[#00B4D8]/30 relative overflow-hidden"
          >
            {/* Efecto de brillo en el borde */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#90E0EF]/20 via-[#CAF0F8]/10 to-[#90E0EF]/20 opacity-50"></div>

            {/* Header del modal */}
            <div className="relative z-10 flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#03045E] to-[#00B4D8] bg-clip-text text-transparent">
                Análisis Inteligente de Documentos
              </h3>
            </div>

            {/* Contenido del modal */}
            <div className="relative z-10">
              {!isProcessing && !isComplete && (
                <>
                  {/* Zona de drag & drop con efecto hover sutil */}
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                      isDragOver
                        ? "border-[#00B4D8] bg-[#CAF0F8]/40 scale-105"
                        : "border-[#00B4D8]/40 bg-[#CAF0F8]/20 hover:border-[#00B4D8]/60 hover:bg-[#CAF0F8]/30 hover:scale-105 hover:shadow-lg hover:shadow-[#00B4D8]/20"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("file-input")?.click()
                    }
                  >
                    <div className="relative inline-block mb-4">
                      {/* Icono de documento con efecto glassmorphism */}
                      <div className="w-20 h-24 bg-gradient-to-br from-[#90E0EF]/60 to-[#CAF0F8]/40 rounded-xl relative backdrop-blur-sm border border-white/30 shadow-lg">
                        <div className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-br from-[#00B4D8] to-[#03045E] rounded-bl-xl"></div>
                      </div>
                      {/* Icono de upload superpuesto */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-[#03045E] to-[#00B4D8] rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </div>
                    </div>

                    {selectedFile ? (
                      <div className="space-y-2">
                        <p className="text-[#03045E] font-medium">
                          Archivo seleccionado:
                        </p>
                        <p className="text-[#00B4D8] font-semibold">
                          {selectedFile.name}
                        </p>
                        <p className="text-sm text-[#03045E]/70">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <p className="text-[#03045E]">
                        Arrastra y suelta tu archivo aquí o{" "}
                        <span className="text-[#00B4D8] underline cursor-pointer font-medium">
                          haz clic para seleccionar
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Input de archivo oculto */}
                  <input
                    id="file-input"
                    type="file"
                    accept=".xls,.xlsx,.csv"
                    onChange={(e) =>
                      e.target.files?.[0] && handleFileSelect(e.target.files[0])
                    }
                    className="hidden"
                  />

                  {/* Especificaciones de archivo */}
                  <div className="flex justify-between text-sm text-[#03045E]/70 mt-4 mb-6">
                    <span>Formatos soportados: XLS, XLSX, CSV</span>
                    <span>Tamaño máximo: 25MB</span>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={resetModal}
                      className="px-6 py-3 border border-[#00B4D8] rounded-lg text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-all duration-300"
                    >
                      Limpiar
                    </button>
                    <button
                      onClick={handleProcessFile}
                      disabled={!selectedFile}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        selectedFile
                          ? "bg-gradient-to-r from-[#03045E] to-[#00B4D8] text-white hover:shadow-lg hover:shadow-[#00B4D8]/25 transform hover:scale-105"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Procesar Documento
                    </button>
                  </div>
                </>
              )}

              {/* Estado de procesamiento */}
              {isProcessing && (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <Lottie
                      animationData={anotherSearchAnimation}
                      loop={true}
                      className="w-32 h-32 mx-auto"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#03045E] mb-2">
                    Analizando tu documento...
                  </h4>
                  <p className="text-[#03045E]/70">
                    Nuestro sistema está procesando la información. Esto puede
                    tomar unos momentos.
                  </p>
                  <div className="mt-6">
                    <div className="w-full bg-[#CAF0F8]/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] h-2 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Estado completado */}
              {isComplete && (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-[#03045E] mb-2">
                    ¡Análisis completado!
                  </h4>
                  <p className="text-[#03045E]/70 mb-6">
                    Tu documento ha sido procesado exitosamente. Descarga el
                    informe generado.
                  </p>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={handleDownload}
                      className="px-8 py-3 bg-gradient-to-r from-[#03045E] to-[#00B4D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#00B4D8]/25 transition-all duration-300 transform hover:scale-105"
                    >
                      Descargar Informe
                    </button>
                    <button
                      onClick={resetModal}
                      className="px-6 py-3 border border-[#00B4D8] rounded-lg text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-all duration-300"
                    >
                      Procesar Otro
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
