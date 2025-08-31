# Integración con Python - Anaviz 2024

## Descripción

Esta aplicación Next.js incluye un sistema de procesamiento de archivos que se conectará con scripts de Python para analizar documentos usando la API de ChatGPT.

## Arquitectura

### Frontend (Next.js)

- **Componente**: `ProductShowcase.tsx` - Modal de subida de archivos
- **API Route**: `/api/process-document` - Endpoint para procesar archivos
- **Configuración**: `src/lib/api.ts` - Interfaces y funciones de la API

### Backend (Python - Futuro)

- **Scripts**: Scripts de Python que se conectarán con la API de ChatGPT
- **Parámetros**: Configuración para el análisis de documentos
- **Respuesta**: Archivo procesado para descarga

## Flujo de Trabajo

1. **Usuario sube archivo** → Drag & Drop o selección manual
2. **Validación** → Tipo de archivo (.xls, .xlsx, .csv) y tamaño (25MB max)
3. **Envío a Python** → Archivo + parámetros de procesamiento
4. **Procesamiento** → Python + ChatGPT API (oculto al usuario)
5. **Respuesta** → Archivo procesado disponible para descarga

## Parámetros de Procesamiento

```typescript
interface ProcessingParameters {
  analysisType: "contract" | "report" | "data";
  outputFormat: "pdf" | "excel" | "csv";
  includeCharts: boolean;
  language: "es" | "en";
}
```

## Implementación Python (Futuro)

### 1. Servidor Python

```python
# Ejemplo de estructura
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
import openai
import pandas as pd

app = FastAPI()

@app.post("/process-document")
async def process_document(file: UploadFile = File(...), parameters: str = Form(...)):
    # Procesar archivo con ChatGPT
    # Retornar archivo procesado
    pass
```

### 2. Conexión con ChatGPT

```python
# Configuración de OpenAI
openai.api_key = "tu-api-key"

# Procesamiento del documento
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "Eres un analista experto..."},
        {"role": "user", "content": f"Analiza este documento: {file_content}"}
    ]
)
```

### 3. Generación de Archivo

```python
# Crear archivo de salida según formato solicitado
if output_format == "pdf":
    # Generar PDF con reporte
elif output_format == "excel":
    # Generar Excel con análisis
```

## Configuración de Desarrollo

### 1. Instalar dependencias

```bash
npm install lottie-react
```

### 2. Variables de entorno

```env
# .env.local
PYTHON_API_URL=http://localhost:8000
OPENAI_API_KEY=tu-api-key
```

### 3. Ejecutar aplicación

```bash
npm run dev
```

## Características del Modal

- ✅ **Drag & Drop** - Subida intuitiva de archivos
- ✅ **Validación** - Tipos y tamaños de archivo
- ✅ **Animación** - Lottie durante el procesamiento
- ✅ **Estados** - Loading, éxito, error
- ✅ **Descarga** - Archivo procesado
- ✅ **UI Glassmorphism** - Diseño moderno y atractivo
- ✅ **Responsive** - Funciona en móvil y desktop

## Seguridad

- **Validación de archivos** - Solo tipos permitidos
- **Límite de tamaño** - Máximo 25MB
- **Sanitización** - Limpieza de nombres de archivo
- **API Key** - Oculto en variables de entorno

## Próximos Pasos

1. **Implementar scripts de Python** con FastAPI
2. **Configurar API de ChatGPT** con parámetros específicos
3. **Conectar frontend** con backend Python
4. **Testing** de flujo completo
5. **Deployment** en producción

## Notas Importantes

- La API de ChatGPT se mantiene oculta al usuario
- El sistema parece hacer el análisis internamente
- Los parámetros se pueden personalizar según necesidades
- La arquitectura permite escalabilidad futura
