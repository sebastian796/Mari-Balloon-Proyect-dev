import React, { useState } from 'react';
import './PaymentModal.scss'; 
import type { CotizacionPreview } from '../../../types/ChatTypes';



interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    preview: CotizacionPreview | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, preview }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    if (!isOpen || !preview) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Simulando pago de S/. ${preview.precioTotal.toFixed(2)} con tarjeta.`);
        onClose();
    };

    return (
        <div className="modal-backdrop"> 
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                
                <h2>🎉 Confirmación y Pago</h2>
                <p className="modal-monto">Monto Total: <strong>S/. {preview.precioTotal.toFixed(2)}</strong></p>
                
                <hr />

                <h3>📋 Resumen de la Cotización</h3>
                <div className="resumen-details">
                    <p><strong>Evento:</strong> {preview.tipoEvento}</p>
                    <p><strong>Paquete:</strong> {preview.nombrePaquete}</p>
                    <p><strong>Lugar:</strong> {preview.detallesContacto?.Lugar}</p>
                    <p><strong>Hora:</strong> {preview.detallesContacto?.Hora}</p>
                    <p><strong>Celular:</strong> {preview.detallesContacto?.Contacto}</p>
                    
                    
                    
                </div>

                <hr />

                {/* Formulario de Pago --- */}
                <h3>💳 Ingresa tus Datos de Tarjeta</h3>
                <form onSubmit={handleSubmit} className="payment-form">
                    <label>
                        Número de Tarjeta:
                        <input 
                            type="text" 
                            placeholder="XXXX XXXX XXXX XXXX" 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            maxLength={19}
                            required 
                        />
                    </label>
                    <div className="expiry-cvv-group">
                        <label>
                            Vencimiento (MM/AA):
                            <input 
                                type="text" 
                                placeholder="MM/AA" 
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                maxLength={5}
                                required 
                            />
                        </label>
                        <label>
                            CVV:
                            <input 
                                type="text" 
                                placeholder="123" 
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                maxLength={4}
                                required 
                            />
                        </label>
                    </div>
                    
                    <button type="submit" className="pay-button">Pagar S/. {preview.precioTotal.toFixed(2)}</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;