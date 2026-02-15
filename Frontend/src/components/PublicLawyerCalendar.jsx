import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/apiClient';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function PublicLawyerCalendar({ lawyerId, consultationFee }) {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [error, setError] = useState(null);

    // Calculate calendar grid
    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        // Previous month padding
        for (let i = 0; i < firstDay; i++) {
            days.push({ day: null, fullDate: null });
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(year, month, day);
            const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isPast = dateObj < new Date().setHours(0, 0, 0, 0);
            days.push({ day, fullDate, isPast, dateObj });
        }

        return days;
    }, [currentDate]);

    // Fetch availability when a date is selected
    useEffect(() => {
        if (!selectedDate || !lawyerId) return;

        const fetchAvailability = async () => {
            setLoadingSlots(true);
            setError(null);
            setAvailableSlots([]);
            setSelectedSlot(null);

            try {
                const { data } = await apiClient.get(`/lawyers/${lawyerId}/availability`, {
                    params: { date: selectedDate }
                });
                // Expecting data.data.slots array
                setAvailableSlots(data.data.slots || []);
            } catch (err) {
                console.error('Error fetching availability:', err);
                setError('Could not load availability. Please try again.');
            } finally {
                setLoadingSlots(false);
            }
        };

        fetchAvailability();
    }, [selectedDate, lawyerId]);

    const handleDateClick = (dateStr) => {
        setSelectedDate(dateStr);
    };

    const navigateMonth = (direction) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + direction, 1));
    };

    const handleBookAppointment = () => {
        if (!selectedDate || !selectedSlot) return;
        navigate(`/book/${lawyerId}`, {
            state: {
                date: selectedDate,
                time: selectedSlot.time,
                consultationFee
            }
        });
    };

    // Helper to format date for display
    const formattedSelectedDate = selectedDate
        ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        : '';

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                    Book an Appointment
                </h3>
                <p className="text-sm text-gray-500 mt-1">Select a date and time to schedule a consultation.</p>
            </div>

            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                {/* Calendar Grid */}
                <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="font-medium text-gray-900">
                            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h4>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-600"
                                disabled={currentDate <= new Date() && currentDate.getMonth() === new Date().getMonth()} // Disable going back past current month? Optional.
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => navigateMonth(1)}
                                className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-600"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 mb-2 text-center">
                        {DAYS.map(d => (
                            <div key={d} className="text-xs font-medium text-gray-400 py-2 uppercase tracking-wide">
                                {d}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((item, idx) => {
                            if (!item.day) return <div key={`empty-${idx}`} />;

                            const isSelected = item.fullDate === selectedDate;
                            const isToday = item.fullDate === new Date().toISOString().split('T')[0];

                            return (
                                <button
                                    key={item.fullDate}
                                    onClick={() => !item.isPast && handleDateClick(item.fullDate)}
                                    disabled={item.isPast}
                                    className={`
                                        h-10 w-full rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-200
                                        ${isSelected
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                            : item.isPast
                                                ? 'text-gray-300 cursor-not-allowed'
                                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }
                                        ${isToday && !isSelected ? 'ring-1 ring-blue-600 text-blue-600' : ''}
                                    `}
                                >
                                    {item.day}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Slots Panel */}
                <div className="p-6 w-full lg:w-80 bg-gray-50/50 flex flex-col">
                    <h4 className="font-medium text-gray-900 mb-4">
                        {selectedDate ? 'Available Slots' : 'Select a Date'}
                    </h4>

                    {selectedDate ? (
                        loadingSlots ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-8">
                                <Loader2 className="w-6 h-6 animate-spin mb-2" />
                                <span className="text-sm">Checking availability...</span>
                            </div>
                        ) : error ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-red-500 py-8 text-center px-4">
                                <AlertCircle className="w-6 h-6 mb-2" />
                                <span className="text-sm">{error}</span>
                            </div>
                        ) : availableSlots.length > 0 ? (
                            <>
                                <p className="text-xs text-gray-500 mb-3">{formattedSelectedDate}</p>
                                <div className="flex-1 overflow-y-auto max-h-[280px] grid grid-cols-2 gap-2 content-start pr-1 custom-scrollbar">
                                    {availableSlots.map((slot, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`
                                                py-2.5 px-3 rounded-lg text-sm font-medium border transition-all duration-200 flex items-center justify-center gap-1.5
                                                ${selectedSlot === slot
                                                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm'
                                                }
                                            `}
                                        >
                                            <Clock className="w-3.5 h-3.5" />
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <button
                                        onClick={handleBookAppointment}
                                        disabled={!selectedSlot}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                                    >
                                        Book Appointment
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-8">
                                <CalendarIcon className="w-8 h-8 mb-2 opacity-20" />
                                <p className="text-sm">No slots available on this date.</p>
                            </div>
                        )
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-12 text-center">
                            <CalendarIcon className="w-10 h-10 mb-3 opacity-20" />
                            <p className="text-sm">Please select a date from the calendar to view available time slots.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
