// Configuración de la API para procesamiento de archivos
// Esta es la base para cuando se implemente la funcionalidad completa con Python

export interface FileProcessingRequest {
  file: File;
  parameters: {
    analysisType: "contract" | "report" | "data";
    outputFormat: "pdf" | "excel" | "csv";
    includeCharts: boolean;
    language: "es" | "en";
  };
}

export interface FileProcessingResponse {
  success: boolean;
  downloadUrl?: string;
  fileName?: string;
  error?: string;
  processingTime?: number;
}

// Función para enviar archivo a la API de Python
export const processFileWithAPI = async (
  request: FileProcessingRequest
): Promise<FileProcessingResponse> => {
  try {
    // Crear FormData para enviar el archivo
    const formData = new FormData();
    formData.append("file", request.file);
    formData.append("parameters", JSON.stringify(request.parameters));

    // En producción, esta URL apuntaría a tu servidor Python
    const response = await fetch("/api/process-document", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error procesando archivo:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};

// Función para descargar el archivo procesado
export const downloadProcessedFile = (
  downloadUrl: string,
  fileName: string
) => {
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Configuración por defecto para el procesamiento
export const defaultProcessingParameters = {
  analysisType: "contract" as const,
  outputFormat: "pdf" as const,
  includeCharts: true,
  language: "es" as const,
};
