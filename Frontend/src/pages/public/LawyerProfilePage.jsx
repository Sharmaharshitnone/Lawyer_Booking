import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    MapPin, Star, ShieldCheck, Mail, Phone, Calendar, Clock,
    Award, GraduationCap, Languages, ChevronRight, Scale,
    MessageSquare, ThumbsUp, Briefcase
} from 'lucide-react';
import apiClient from '../../services/apiClient';
import PublicLawyerCalendar from '../../components/PublicLawyerCalendar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LawyerProfilePage = () => {
    const { id } = useParams();
    const [lawyer, setLawyer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('about');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLawyer = async () => {
            try {
                const { data } = await apiClient.get(`/lawyers/${id}`);
                setLawyer(data.data);
            } catch (err) {
                console.error('Error fetching lawyer:', err);
                setError('Failed to load lawyer profile.');
            } finally {
                setLoading(false);
            }
        };
        fetchLawyer();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !lawyer) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
                <p className="text-gray-500 mb-6">{error || "The lawyer profile you're looking for doesn't exist."}</p>
                <Link to="/lawyers" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Browse All Lawyers
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                            <img
                                src={lawyer.avatar || "https://ui-avatars.com/api/?name=" + lawyer.name}
                                alt={lawyer.name}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg border-4 border-white"
                            />
                            {lawyer.isVerified && (
                                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-md border-2 border-white" title="Verified Lawyer">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-gray-900">{lawyer.name}</h1>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wide border border-blue-100">
                                        {lawyer.experience}+ Years Exp.
                                    </span>
                                </div>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                                    {lawyer.headline || "Legal Professional"}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span>{lawyer.location || "Location not specified"}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="font-semibold text-yellow-700">{lawyer.rating}</span>
                                    <span className="text-yellow-600">({lawyer.totalReviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                                    <Briefcase className="w-4 h-4 text-green-600" />
                                    <span className="font-medium text-green-700">{lawyer.casesWon || 0} Cases Won</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA (Desktop) */}
                        <div className="hidden md:block flex-shrink-0 text-right">
                             <div className="text-sm text-gray-500 mb-1">Consultation Fee</div>
                             <div className="text-3xl font-bold text-gray-900 mb-4">₹{lawyer.consultationFee}</div>
                             <button
                                onClick={() => document.getElementById('calendar-section').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
                             >
                                Book Appointment
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Tabs */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-20 z-10 lg:static">
                            <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
                                {['about', 'experience', 'reviews'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-4 px-6 text-sm font-medium transition-colors whitespace-nowrap ${
                                            activeTab === tab
                                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 md:p-8 min-h-[400px]">
                                {activeTab === 'about' && (
                                    <div className="space-y-8 animate-in fade-in duration-300">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <UserIcon className="w-5 h-5 text-blue-600" /> About {lawyer.firstName}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base">
                                                {lawyer.bio || "No biography available."}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <Scale className="w-5 h-5 text-blue-600" /> Areas of Expertise
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {lawyer.specialty?.length > 0 ? (
                                                    lawyer.specialty.map((spec, index) => (
                                                        <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100 transition-colors hover:bg-blue-100 cursor-default">
                                                            {spec}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-gray-500 italic">No specializations listed.</span>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <Languages className="w-5 h-5 text-blue-600" /> Languages Spoken
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {lawyer.languages?.length > 0 ? (
                                                    lawyer.languages.map((lang, index) => (
                                                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm">
                                                            {lang}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-gray-500 italic">Not specified.</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'experience' && (
                                    <div className="space-y-8 animate-in fade-in duration-300">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                                <GraduationCap className="w-5 h-5 text-blue-600" /> Education & Qualifications
                                            </h3>
                                            <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-2">
                                                {lawyer.qualifications?.length > 0 ? (
                                                    lawyer.qualifications.map((edu, idx) => (
                                                        <div key={idx} className="relative pl-8">
                                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>
                                                            <h4 className="font-semibold text-gray-900 text-base">{edu.degree}</h4>
                                                            <p className="text-gray-600 mt-1">{edu.institution}</p>
                                                            <span className="inline-block mt-2 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                                {edu.year}
                                                            </span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="pl-8 text-gray-500 italic">No qualifications listed.</p>
                                                )}
                                            </div>
                                        </div>

                                        {lawyer.barCouncilId && (
                                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex items-start gap-4">
                                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                                    <Award className="w-6 h-6 text-slate-700" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">Bar Council Verification</h4>
                                                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                                        <div>
                                                            <span className="text-slate-500 block text-xs uppercase tracking-wider">Registration No.</span>
                                                            <span className="font-mono text-slate-700">{lawyer.barCouncilId}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-500 block text-xs uppercase tracking-wider">State Bar Council</span>
                                                            <span className="text-slate-700">{lawyer.barCouncilState}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div className="space-y-6 animate-in fade-in duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                                <MessageSquare className="w-5 h-5 text-blue-600" /> Client Reviews
                                            </h3>
                                            <div className="flex items-center gap-1 text-sm bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100 text-yellow-700">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="font-bold">{lawyer.rating}</span>
                                                <span>/ 5.0</span>
                                            </div>
                                        </div>

                                        {lawyer.recentReviews?.length > 0 ? (
                                            <div className="grid gap-4">
                                                {lawyer.recentReviews.map((review) => (
                                                    <div key={review.id} className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                                                                    {review.author?.name ? review.author.name.charAt(0) : 'U'}
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-gray-900 text-sm">{review.author?.name || 'Anonymous Client'}</p>
                                                                    <p className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <h4 className="font-medium text-gray-900 text-sm mb-1">{review.title}</h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">"{review.content}"</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                                <MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                                <p className="text-gray-500 font-medium">No reviews yet.</p>
                                                <p className="text-sm text-gray-400">Be the first to leave a review after your consultation.</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-6 text-lg">Consultation Details</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600 text-sm font-medium">Consultation Fee</span>
                                    <span className="font-bold text-gray-900 text-lg">₹{lawyer.consultationFee}</span>
                                </div>
                                <div className="flex items-center justify-between px-3">
                                    <span className="text-gray-500 text-sm">Duration</span>
                                    <span className="text-gray-700 text-sm font-medium">60 Minutes</span>
                                </div>
                                <div className="flex items-center justify-between px-3">
                                    <span className="text-gray-500 text-sm">Mode</span>
                                    <span className="text-gray-700 text-sm font-medium">Video / In-Person</span>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById('calendar-section').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-6"
                            >
                                Book Consultation
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <h4 className="font-semibold text-gray-900 text-sm">Contact Information</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span>{lawyer.phone ? `+91 ${lawyer.phone.replace(/.(?=.{4})/g, '*')}` : 'Contact Hidden'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span className="truncate">{lawyer.email ? lawyer.email.replace(/(.{2})(.*)(?=@)/, (gp1, gp2, gp3) => gp2 + "*".repeat(gp3.length)) : 'Email Hidden'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <span>{lawyer.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calendar Section - Interactive Calendar added here */}
                <div id="calendar-section" className="mt-12 pt-8 border-t border-gray-200">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Consultation</h2>
                            <p className="text-gray-500">Select a convenient date and time to speak with {lawyer.firstName}.</p>
                        </div>
                        <PublicLawyerCalendar lawyerId={lawyer.id} consultationFee={lawyer.consultationFee} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const UserIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default LawyerProfilePage;
