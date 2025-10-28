
export type FlowStatus = "QUESTION_ACTIVE" | "COTIZACION_FINALIZADA" | "ERROR_INVALID_INPUT" | "INITIAL";


export interface ChatRequest {
    sessionId: string;
    userInput: string;
}

export interface ChatResponse {
    sessionId: string;
    nextQuestion: string;
    options: string[] | null; 
    status: FlowStatus;
    cotizacionPreview: CotizacionPreview | null;
}

export interface CotizacionPreview {
    tipoEvento: string;
    nombrePaquete: string;
    precioTotal: number;
    detallesContacto: { 
        Lugar: string;
        Hora: string;
        Contacto: string;
    };
}

export interface ChatMessage {
    id: number;
    text: string;
    sender: 'user' | 'bot'; 
}