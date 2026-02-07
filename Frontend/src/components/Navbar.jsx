import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, User, LogIn, LogOut, LayoutDashboard, Settings,
  ChevronDown, Shield, Scale, UserCircle, Bell
} from 'lucide-react';
import NyayBookerLogo from "./NyayBookerLogo";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, isAdmin, isLawyer } = useAuth();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/lawyers", label: "Find Lawyers" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  const getDashboardLink = () => {
    if (isAdmin) return '/admin/dashboard';
    if (isLawyer) return '/lawyer/dashboard';
    return '/user/dashboard';
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    const first = user.firstName?.[0] || '';
    const last = user.lastName?.[0] || '';
    return (first + last).toUpperCase() || 'U';
  };

  const getRoleConfig = () => {
    if (isAdmin) return {
      text: 'Administrator',
      color: 'from-red-500 to-rose-600',
      bg: 'bg-red-50',
      textColor: 'text-red-700',
      icon: Shield
    };
    if (isLawyer) return {
      text: 'Legal Professional',
      color: 'from-indigo-500 to-purple-600',
      bg: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      icon: Scale
    };
    return {
      text: 'Client',
      color: 'from-blue-500 to-cyan-600',
      bg: 'bg-blue-50',
      textColor: 'text-blue-700',
      icon: UserCircle
    };
  };

  const roleConfig = getRoleConfig();
  const RoleIcon = roleConfig.icon;

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <Link to="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
                <NyayBookerLogo size={32} className="group-hover:scale-105 transition-transform duration-300" />
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-bold text-blue-900 dark:text-white tracking-tight font-display">
                    Nyay<span className="text-[#cfa052]">Booker</span>
                  </span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">
                    Legal Services
                  </span>
                </div>
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium px-4 py-2 rounded-full transition ${
                  isActive(link.path)
                    ? "text-[#1D1D1F] bg-black/5 dark:text-white dark:bg-white/10"
                    : "text-[#86868B] dark:text-gray-400 hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              /* Profile Dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
                >
                  {/* Avatar */}
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.firstName}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
                      />
                    ) : (
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${roleConfig.color} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        {getUserInitials()}
                      </div>
                    )}

                  <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${roleConfig.color} p-4`}>
                      <div className="flex items-center gap-3">
                        {user?.avatar ? (
                          <img src={user.avatar} alt={user.firstName} className="w-12 h-12 rounded-xl object-cover ring-2 ring-white/30" />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white font-bold text-lg">
                            {getUserInitials()}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-white text-sm truncate">
                            {user?.firstName} {user?.lastName}
                          </p>
                          <p className="text-xs text-white/80 truncate">{user?.email}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <RoleIcon className="w-3 h-3 text-white/80" />
                        <span className="text-[10px] font-semibold text-white/90 uppercase tracking-wider">
                          {roleConfig.text}
                        </span>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <Link
                        to={getDashboardLink()}
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                      >
                        <LayoutDashboard className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">Dashboard</span>
                      </Link>

                      <Link
                        to={isLawyer ? "/lawyer/profile" : "/user/settings"}
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                      >
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">Settings</span>
                      </Link>

                      <Link
                        to="/user/notifications"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                      >
                        <Bell className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">Notifications</span>
                      </Link>
                    </div>

                    {/* Logout */}
                    <div className="p-2 pt-0 border-t border-gray-100 dark:border-gray-800 mt-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Login/Signup Buttons */
              <>
                <Link
                  to="/login"
                  className="text-xs font-medium text-[#1D1D1F] dark:text-gray-300 hover:text-[#0071e3] transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium transition shadow-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1D1D1F] dark:text-white"
              aria-label="Toggle menu"
            >
               {isMenuOpen ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
            </button>
          </div>
        </div>
      </div>

       {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 dark:bg-black/95 backdrop-blur-md ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
            <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-[#1D1D1F] dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10"
                    >
                        {link.label}
                    </Link>
                ))}

                 <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                    {isAuthenticated ? (
                        <>
                             <div className="flex items-center gap-3 px-4 mb-4">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt={user.firstName} className="w-10 h-10 rounded-full object-cover" />
                                ) : (
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${roleConfig.color} flex items-center justify-center text-white font-bold text-sm`}>
                                        {getUserInitials()}
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold text-sm text-[#1D1D1F] dark:text-white">{user?.firstName} {user?.lastName}</p>
                                    <p className="text-xs text-gray-500">{user?.email}</p>
                                </div>
                             </div>
                             <Link
                                to={getDashboardLink()}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-[#1D1D1F] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg"
                             >
                                Dashboard
                             </Link>
                             <button
                                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                                className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg"
                             >
                                Sign Out
                             </button>
                        </>
                    ) : (
                        <div className="flex flex-col gap-3 px-4">
                             <Link
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-center w-full py-3 text-sm font-medium text-[#1D1D1F] dark:text-gray-200 bg-gray-100 dark:bg-white/10 rounded-xl"
                             >
                                Login
                             </Link>
                             <Link
                                to="/signup"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-center w-full py-3 text-sm font-medium text-white bg-[#0071e3] rounded-xl shadow-sm"
                             >
                                Sign Up
                             </Link>
                        </div>
                    )}
                 </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
