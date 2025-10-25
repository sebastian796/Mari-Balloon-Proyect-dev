import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';
import { Calendar, momentLocalizer, Views, type View } from 'react-big-calendar'; 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.scss'; 

const localizer = momentLocalizer(moment);

interface Quote {
    id: number;
    cliente: string;
    fechaEvento: Date;
    servicio: string;
    estado: 'PENDIENTE' | 'CONFIRMADO';
}

interface CalendarEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    resource?: 'PENDIENTE' | 'CONFIRMADO';
}

const initialQuotes: Quote[] = [
    { id: 101, cliente: "Sofia Lopez", fechaEvento: new Date(2025, 10, 5, 14, 0), servicio: "Boda", estado: "PENDIENTE" }, 
    { id: 102, cliente: "Carlos Ruiz", fechaEvento: new Date(2025, 10, 15, 10, 0), servicio: "Cumpleaños", estado: "PENDIENTE" },
    { id: 201, cliente: "Pedro Gómez", fechaEvento: new Date(2025, 10, 2, 16, 0), servicio: "Aniversario", estado: "CONFIRMADO" },
];

const AdminDashboard: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [date, setDate] = useState(new Date()); 
    const [view, setView] = useState<View>(Views.WEEK);

    const confirmedEvents: CalendarEvent[] = useMemo(() => {
        return quotes
            .filter(q => q.estado === 'CONFIRMADO')
            .map(q => ({
                id: q.id,
                title: `${q.servicio} - ${q.cliente}`,
                start: q.fechaEvento,
                end: moment(q.fechaEvento).add(4, 'hours').toDate(), 
                resource: q.estado,
            }));
    }, [quotes]);

    const handleConfirmQuote = (id: number) => {
        setQuotes(prevQuotes =>
            prevQuotes.map(q =>
                q.id === id ? { ...q, estado: 'CONFIRMADO' } : q
            )
        );
    };

    const handleSelectEvent = useCallback((event: CalendarEvent) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    }, []);

    const handleSaveEvent = (updatedEvent: CalendarEvent) => {
        setQuotes(prevQuotes => {
            return prevQuotes.map(q => {
                if (q.id === updatedEvent.id) {
                    const parts = updatedEvent.title.split(' - ');
                    return {
                        ...q,
                        servicio: parts.length > 1 ? parts[0].trim() : updatedEvent.title.trim(),
                        cliente: parts.length > 1 ? parts[1].trim() : 'Cliente Desconocido',
                        fechaEvento: updatedEvent.start, 
                    };
                }
                return q;
            });
        });
        setIsModalOpen(false);
        setSelectedEvent(null);
        // llamada PUT/PATCH al Back-end 
    };

    const handleDeleteEvent = (eventId: number) => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta confirmación?");
        if (confirmDelete) {
            setQuotes(prevQuotes =>
                prevQuotes.filter(q => q.id !== eventId) 
            );
            setIsModalOpen(false);
            setSelectedEvent(null);
            //llamada DELETE al Back-end
        }
    };
    
    const handleNavigate = useCallback((newDate: Date) => {
        setDate(newDate);
    }, []);

    const handleViewChange = useCallback((newView: View) => {
        setView(newView);
    }, []);


    return (
        <div className="admin-dashboard-page">
            <h1 className="title">Panel de Administración - Gestión de Eventos</h1>
            
            <div className="admin-dashboard-container">
                
                <div className="quote-list-panel">
                    <h2>Cotizaciones Pendientes</h2>
                    {quotes.filter(q => q.estado === 'PENDIENTE').map(q => (
                        <div key={q.id} className="quote-item">
                            <p><strong>Cliente:</strong> {q.cliente}</p>
                            <p><strong>Fecha Evento:</strong> {moment(q.fechaEvento).format('DD/MM/YYYY HH:mm')}</p>
                            <button onClick={() => handleConfirmQuote(q.id)}>
                                Confirmar y Mover a Calendario
                            </button>
                        </div>
                    ))}
                    {quotes.filter(q => q.estado === 'PENDIENTE').length === 0 && (
                        <p>No hay cotizaciones pendientes.</p>
                    )}
                </div>

                <div className="calendar-panel">
                    <h2>Calendario de Eventos Confirmados</h2>
                    <div className="calendar-wrapper" style={{ height: 600 }}>
                        <Calendar
                            localizer={localizer}
                            events={confirmedEvents}
                            startAccessor="start"
                            endAccessor="end"
                            
                            date={date}
                            view={view}
                            onNavigate={handleNavigate}
                            onView={handleViewChange}

                            defaultView={Views.WEEK} 
                            views={[Views.MONTH, Views.WEEK, Views.DAY]}
                            style={{ height: '100%' }}
                            
                            messages={{
                                next: "Sig.",
                                previous: "Ant.",
                                today: "Hoy",
                                month: "Mes",
                                week: "Semana",
                                day: "Día",
                                date: "Fecha",
                                time: "Hora",
                                event: "Evento",
                            }}
                            onSelectEvent={handleSelectEvent}
                        />
                    </div>
                </div>

            </div>

            {isModalOpen && selectedEvent && (
                <EditEventModal
                    event={selectedEvent}
                    onSave={handleSaveEvent}
                    onDelete={handleDeleteEvent}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

interface EditModalProps {
    event: CalendarEvent;
    onSave: (event: CalendarEvent) => void;
    onDelete: (id: number) => void;
    onClose: () => void;
}

const EditEventModal: React.FC<EditModalProps> = ({ event, onSave, onDelete, onClose }) => {
    const [title, setTitle] = useState(event.title);
    const [start, setStart] = useState(moment(event.start).format('YYYY-MM-DDTHH:mm'));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedEvent: CalendarEvent = {
            ...event,
            title,
            start: new Date(start),
            end: moment(new Date(start)).add(4, 'hours').toDate(), 
        };
        onSave(updatedEvent);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>Editar Evento Confirmado</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Título / Servicio - Cliente</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha y Hora de Inicio</label>
                        <input
                            type="datetime-local"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="modal-actions">
                        <button type="submit" className="btn btn-save">Guardar</button>
                        <button type="button" className="btn btn-delete" onClick={() => onDelete(event.id)}>Eliminar</button>
                        <button type="button" className="btn btn-close" onClick={onClose}>Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;