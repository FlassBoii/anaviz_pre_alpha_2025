import { NextRequest, NextResponse } from "next/server";

// Esta es la API route que se conectará con Python
// En producción, aquí se haría la llamada a tu script de Python

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const parameters = JSON.parse(formData.get("parameters") as string);

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No se proporcionó archivo" },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    const allowedTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: "Tipo de archivo no soportado" },
        { status: 400 }
      );
    }

    // Validar tamaño (25MB)
    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Archivo demasiado grande" },
        { status: 400 }
      );
    }

    // Aquí es donde se conectaría con Python
    // Ejemplo de la llamada que se haría:

    /*
    const pythonResponse = await fetch('http://localhost:8000/process-document', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    const result = await pythonResponse.json();
    */

    // Por ahora, simulamos el procesamiento
    // En producción, esto sería la respuesta real de Python
    const processingTime = Math.random() * 2000 + 1000; // 1-3 segundos

    // Simular delay de procesamiento
    await new Promise((resolve) => setTimeout(resolve, processingTime));

    // Simular respuesta exitosa
    const result = {
      success: true,
      downloadUrl: `/api/download/processed-${Date.now()}.pdf`,
      fileName: `processed-${file.name.replace(/\.[^/.]+$/, "")}.pdf`,
      processingTime: processingTime,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error en API route:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}

// Configuración para archivos grandes
export const config = {
  api: {
    bodyParser: false,
  },
};
