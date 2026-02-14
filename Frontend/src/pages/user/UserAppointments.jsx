/**
 * User Appointments Page
 * View upcoming, past, and cancelled appointments
 */

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Video, Phone, User, XCircle, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { appointmentAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const tabs = [
    { id: 'upcoming', label: 'Upcoming', statuses: ['PENDING', 'CONFIRMED'] },
    { id: 'past', label: 'Past', statuses: ['COMPLETED'] },
    { id: 'cancelled', label: 'Cancelled', statuses: ['CANCELLED'] },
];

const statusConfig = {
    PENDING: { label: 'Pending', color: 'bg-amber-100 text-amber-700', icon: AlertCircle },
    CONFIRMED: { label: 'Confirmed', color: 'bg-green-100 text-green-700', icon: CheckCircle },
    COMPLETED: { label: 'Completed', color: 'bg-blue-100 text-blue-700', icon: CheckCircle },
    CANCELLED: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: XCircle },
};

const meetingTypeIcons = {
    VIDEO: Video,
    PHONE: Phone,
    IN_PERSON: MapPin,
};

export default function UserAppointments() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('upcoming');
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAppointments() {
            setLoading(true);
            try {
                const { data } = await appointmentAPI.getAll();
                setAppointments(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setAppointments([]);
            } finally {
                setLoading(false);
            }
        }
        if (user) fetchAppointments();
    }, [user]);

    const handleCancel = async (appointmentId) => {
        if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
        try {
            await appointmentAPI.cancel(appointmentId);
            setAppointments(prev =>
                prev.map(apt => apt.id === appointmentId ? { ...apt, status: 'CANCELLED' } : apt)
            );
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            alert('Failed to cancel appointment. Please try again.');
        }
    };

    const currentStatuses = tabs.find(t => t.id === activeTab)?.statuses || [];
    const filteredAppointments = appointments.filter(apt =>
        currentStatuses.includes(apt.status)
    );

    const counts = {
        upcoming: appointments.filter(a => ['PENDING', 'CONFIRMED'].includes(a.status)).length,
        past: appointments.filter(a => a.status === 'COMPLETED').length,
        cancelled: appointments.filter(a => a.status === 'CANCELLED').length,
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return 'N/A';
        return new Date(dateStr).toLocaleDateString('en-IN', {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        });
    };

    const formatTime = (timeStr) => {
        if (!timeStr) return 'N/A';
        // Handle "HH:MM" or "HH:MM:SS" or already formatted
        if (timeStr.includes('AM') || timeStr.includes('PM')) return timeStr;
        const [h, m] = timeStr.split(':');
        const hour = parseInt(h);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        return `${hour % 12 || 12}:${m} ${ampm}`;
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
                <p className="text-gray-500 mt-1">View and manage your consultations</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 pb-1">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${activeTab === tab.id
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {tab.label}
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                            }`}>
                            {counts[tab.id]}
                        </span>
                    </button>
                ))}
            </div>

            {/* Content */}
            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
                </div>
            ) : filteredAppointments.length > 0 ? (
                <div className="space-y-4">
                    {filteredAppointments.map(apt => {
                        const lawyerName = apt.lawyer
                            ? `${apt.lawyer.user?.firstName || ''} ${apt.lawyer.user?.lastName || ''}`.trim()
                            : apt.lawyerName || 'Lawyer';
                        const lawyerAvatar = apt.lawyer?.user?.avatar;
                        const status = statusConfig[apt.status] || statusConfig.PENDING;
                        const StatusIcon = status.icon;
                        const MeetingIcon = meetingTypeIcons[apt.meetingType] || Video;

                        return (
                            <div key={apt.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Lawyer Avatar */}
                                    <div className="flex-shrink-0">
                                        {lawyerAvatar ? (
                                            <img src={lawyerAvatar} alt={lawyerName} className="w-14 h-14 rounded-full object-cover" />
                                        ) : (
                                            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                                                <User className="w-7 h-7 text-blue-600" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{lawyerName}</h3>
                                                {apt.bookingNumber && (
                                                    <span className="text-xs text-gray-400">#{apt.bookingNumber}</span>
                                                )}
                                            </div>
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                                                <StatusIcon className="w-3.5 h-3.5" />
                                                {status.label}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                {formatDate(apt.scheduledDate)}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4 text-gray-400" />
                                                {formatTime(apt.scheduledTime)}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MeetingIcon className="w-4 h-4 text-gray-400" />
                                                {(apt.meetingType || 'VIDEO').replace('_', ' ')}
                                            </div>
                                            {apt.amount && (
                                                <div className="flex items-center gap-1.5 font-medium text-gray-800">
                                                    ₹{parseFloat(apt.amount).toLocaleString()}
                                                </div>
                                            )}
                                        </div>

                                        {apt.clientNotes && (
                                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                                {apt.clientNotes}
                                            </p>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex sm:flex-col gap-2 flex-shrink-0">
                                        {apt.status === 'CONFIRMED' && apt.meetingLink && (
                                            <a
                                                href={apt.meetingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Join Call
                                            </a>
                                        )}
                                        {apt.status === 'PENDING' && (
                                            <button
                                                onClick={() => handleCancel(apt.id)}
                                                className="inline-flex items-center gap-1.5 px-3 py-2 border border-red-200 text-red-600 text-sm rounded-lg hover:bg-red-50 transition-colors"
                                            >
                                                <XCircle className="w-4 h-4" />
                                                Cancel
                                            </button>
                                        )}
                                        <Link
                                            to={`/lawyers/${apt.lawyerId || apt.lawyer?.id}`}
                                            className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            View Lawyer
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-16">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">No {activeTab} appointments</h3>
                    <p className="text-gray-500 mt-1">
                        {activeTab === 'upcoming'
                            ? "You don't have any upcoming appointments. Browse lawyers to book one."
                            : `No ${activeTab} appointments found.`}
                    </p>
                    {activeTab === 'upcoming' && (
                        <Link
                            to="/lawyers"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Find a Lawyer
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
