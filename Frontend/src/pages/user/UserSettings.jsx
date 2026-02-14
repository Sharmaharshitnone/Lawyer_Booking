/**
 * User Settings Page
 * Update profile info and preferences
 */

import { useState, useEffect } from 'react';
import { Save, User, Phone, Mail, MapPin, Bell, BellOff, Lock, Camera, CheckCircle } from 'lucide-react';
import { userAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function UserSettings() {
    const { user, getFullUserData } = useAuth();
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phone: '',
    });

    const [notifications, setNotifications] = useState({
        emailBooking: true,
        emailReminder: true,
        emailPromo: false,
    });

    useEffect(() => {
        if (user) {
            setProfile({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                phone: user.phone || '',
            });
        }
    }, [user]);

    const handleChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage({ type: '', text: '' });
        try {
            await userAPI.updateProfile({
                firstName: profile.firstName,
                lastName: profile.lastName,
                phone: profile.phone,
            });
            // Refresh auth context with updated user data
            if (getFullUserData) await getFullUserData();
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        } catch (error) {
            console.error('Error saving profile:', error);
            setMessage({ type: 'error', text: 'Failed to save changes. Please try again.' });
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your account and preferences</p>
            </div>

            {message.text && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${message.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                    {message.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {message.text}
                </div>
            )}

            {/* Profile Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-400" />
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={user?.email || ''}
                                disabled
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                            />
                        </div>
                        <p className="mt-1 text-xs text-gray-400">Email cannot be changed here</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                value={profile.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                placeholder="+91 98765 43210"
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-gray-400" />
                    Notification Preferences
                </h3>

                <div className="space-y-4">
                    {[
                        { key: 'emailBooking', label: 'Booking confirmations & updates', desc: 'Get notified about booking status changes' },
                        { key: 'emailReminder', label: 'Appointment reminders', desc: 'Receive reminders before your consultations' },
                        { key: 'emailPromo', label: 'Promotional emails', desc: 'Get updates about new features and offers' },
                    ].map(item => (
                        <label key={item.key} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">{item.label}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={notifications[item.key]}
                                    onChange={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors">
                                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${notifications[item.key] ? 'translate-x-5.5' : 'translate-x-0.5'} mt-0.5`} />
                                </div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors font-medium"
                >
                    <Save className="w-4 h-4" />
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    );
}
