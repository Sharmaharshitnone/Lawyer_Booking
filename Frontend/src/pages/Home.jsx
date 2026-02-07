import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-xs font-medium text-[#1D1D1F] dark:text-gray-200 border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Verified Professionals Available Now
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1] text-gray-900 dark:text-white drop-shadow-sm">
              Legal expertise.<br />
              <span className="text-[#0071e3]/90">Simplified.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
              Connect with elite legal minds instantly. Transparent pricing, verified credentials, and secure consultations.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="glass-panel p-2 rounded-full shadow-glass flex items-center gap-2">
                <div className="pl-4 text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base py-3 outline-none"
                  placeholder="Search for lawyers, practice areas, or advice..."
                  type="text"
                />
                <button className="bg-[#0071e3] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md transform hover:scale-[1.02]">
                  Find
                </button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="opacity-70">Popular:</span>
                <Link className="hover:text-[#0071e3] transition font-medium" to="/lawyers?category=criminal">Criminal Defense</Link>
                <span className="opacity-30">•</span>
                <Link className="hover:text-[#0071e3] transition font-medium" to="/lawyers?category=family">Family Law</Link>
                <span className="opacity-30">•</span>
                <Link className="hover:text-[#0071e3] transition font-medium" to="/lawyers?category=corporate">Corporate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why NyayBooker Section */}
      <section className="py-24 bg-[#F5F5F7] dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight">Why NyayBooker?</h2>
            <p className="text-[#86868B] dark:text-gray-400 max-w-2xl mx-auto text-lg font-light">Designed for clarity, built for trust. Everything you need to navigate the legal system with confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            <div className="md:col-span-2 row-span-2 rounded-[32px] overflow-hidden shadow-sm relative group cursor-pointer h-[524px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2400&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">verified</span>
                </div>
                <h3 className="text-3xl font-semibold mb-2 text-white">Expert Legal Counsel</h3>
                <p className="text-gray-200 text-lg max-w-md font-light">Access top-tier lawyers who have been vetted for excellence. Our rigorous selection process ensures you only work with the best.</p>
                <div className="mt-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <Link className="text-white font-medium inline-flex items-center hover:underline" to="/lawyers">
                    Explore Specialists <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-sm relative group h-[250px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2370&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <span className="material-symbols-outlined text-3xl text-white mb-4 font-thin">lock</span>
                <h3 className="text-xl font-semibold mb-2 text-white">Secure &amp; Private</h3>
                <p className="text-sm text-gray-300 font-light">End-to-end encrypted consultations. Your data stays yours.</p>
              </div>
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-sm relative group h-[250px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=2368&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <span className="material-symbols-outlined text-3xl text-white mb-4 font-thin">schedule</span>
                <h3 className="text-xl font-semibold mb-2 text-white">Instant Booking</h3>
                <p className="text-sm text-gray-300 font-light">Real-time availability. Book a slot in seconds.</p>
              </div>
            </div>
            <div className="md:col-span-3 rounded-[32px] overflow-hidden shadow-sm relative group min-h-[250px] bg-white dark:bg-[#1c1c1e]">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2370&amp;auto=format&amp;fit=crop')] bg-cover bg-center hidden md:block opacity-80"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-transparent to-white dark:to-[#1c1c1e] hidden md:block"></div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-3xl text-[#0071e3] font-thin">payments</span>
                    <h3 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white">Transparent Pricing</h3>
                  </div>
                  <p className="text-[#86868B] dark:text-gray-400 text-lg max-w-2xl font-light">No hidden fees. No surprises. See the consultation fee upfront and pay securely through our platform. We believe in complete financial clarity.</p>
                </div>
                <div className="flex-shrink-0 relative z-20">
                  <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm font-medium text-[#1D1D1F] dark:text-gray-200">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0071e3] text-lg">check_circle</span> Fixed Rates</span>
                      <span className="w-px h-4 bg-gray-200 dark:bg-gray-600"></span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#0071e3] text-lg">check_circle</span> No Hidden Costs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-[#F5F5F7] dark:bg-black">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=2370&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Ready to find clarity?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg font-light">Join thousands who have found the right legal representation through our platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition duration-200 shadow-lg" to="/signup">
                Create Free Account
              </Link>
              <Link className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition duration-200 backdrop-blur-sm" to="/lawyers">
                Browse Lawyers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise by Category */}
      <section className="py-24 bg-white dark:bg-[#111111]" id="specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-2">Expertise by Category</h2>
              <p className="text-[#86868B] dark:text-gray-400 font-light">Find a specialist for your specific needs.</p>
            </div>
            <Link className="hidden md:inline-flex items-center text-[#0071e3] font-medium hover:underline text-sm" to="/lawyers">View all categories</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "All", icon: "grid_view" },
              { name: "Criminal", icon: "gavel" },
              { name: "Family", icon: "family_restroom" },
              { name: "Corporate", icon: "business_center" },
              { name: "Property", icon: "home" },
              { name: "Cyber", icon: "devices" },
              { name: "Civil", icon: "description" },
            ].map((cat, idx) => (
              <Link
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-[#1C1C1E] rounded-2xl hover:bg-white hover:shadow-lg dark:hover:bg-gray-800 transition-all duration-300 group border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                to={`/lawyers?category=${cat.name.toLowerCase()}`}
              >
                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-[#0071e3] transition mb-3 font-thin">{cat.icon}</span>
                <span className="text-xs font-medium text-[#1D1D1F] dark:text-gray-200">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Lawyers */}
      <section className="py-24 bg-[#F5F5F7] dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-4">Top Rated Lawyers</h2>
            <p className="text-[#86868B] dark:text-gray-400 max-w-2xl mx-auto font-light">Distinguished professionals with proven track records.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lawyer 1 */}
            <div className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800 group h-full">
              <div className="h-24 bg-[url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-white dark:to-[#1C1C1E]"></div>
              </div>
              <div className="relative px-6 -mt-12 pb-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-[#1C1C1E] shadow-md z-10">
                  <img alt="Rahul Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFxnnuGS_Xv_SE4_lYbdvkeWR4KCdbj0I01nBELkD7Gr1_wuVUzGMiQKzl8pWieyUvEj4bP7Yen3TK0UGQrxya9ESBQTdZNydfx8zQz82SeBiXExP9SucqvQLOXe1a61aEUkHcEuiXmhVRh3OvWRdudjWxYy0AQ30FxGvB19VmdOZkoCLjpEDBmo5uzCMojQ3cWIpwnC8j-87OPrnQsQsqavPfJ2JqFKVVSQzrxDjURYhBGLev7lQEvQbqEGCSFsHW1abY9nMsm9Tk" />
                </div>
                <h3 className="font-semibold text-lg text-[#1D1D1F] dark:text-white">Adv. Rahul Sharma</h3>
                <p className="text-[#0071e3] text-xs font-medium mb-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Criminal Defense</p>
                <div className="flex items-center text-xs text-[#86868B] gap-1 mb-4">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Shimla, HP
                </div>
              </div>
              <div className="px-6 py-4 border-t border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-center bg-gray-50/50 dark:bg-white/5">
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Exp</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white">12 Yrs</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Success</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white text-green-600 dark:text-green-400">96%</p>
                </div>
              </div>
              <div className="p-6 mt-auto flex flex-col gap-4">
                <p className="text-xs text-[#86868B] dark:text-gray-400 line-clamp-2 leading-relaxed font-light">
                  Specializing in criminal defense with a proven track record in high-profile cases.
                </p>
                <button className="w-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black py-3 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm">
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Lawyer 2 */}
            <div className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800 group h-full">
              <div className="h-24 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-white dark:to-[#1C1C1E]"></div>
              </div>
              <div className="relative px-6 -mt-12 pb-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-[#1C1C1E] shadow-md z-10">
                  <img alt="Neha Verma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8-LA26vM7Q2DzH2MDS8fhuATdihtbEx3EJC75GCuB2i86n8Y9Pwa2nFq7Q8RdwkxvyWfYAlW7uzy4FlbihV5dKmoHtGSmc08eUcnPh8VIY9XuRZfWLE-4gUHKkIZSW6tAFDGaXiZCggEenGakW2uwy6i2rt1JDA4p9tWU4VRj9XnaRxS049wqKGq6MVZ7UBSB7LlawS4iX5NkL-5sgCRmP4k8xipm9XJln1psJYKOKRlGdWKVIG5uMyUS3wXJCzavPuLytbjsGNfL" />
                </div>
                <h3 className="font-semibold text-lg text-[#1D1D1F] dark:text-white">Adv. Neha Verma</h3>
                <p className="text-[#0071e3] text-xs font-medium mb-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Family Law</p>
                <div className="flex items-center text-xs text-[#86868B] gap-1 mb-4">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Dharamshala, HP
                </div>
              </div>
              <div className="px-6 py-4 border-t border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-center bg-gray-50/50 dark:bg-white/5">
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Exp</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white">10 Yrs</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Success</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white text-green-600 dark:text-green-400">98%</p>
                </div>
              </div>
              <div className="p-6 mt-auto flex flex-col gap-4">
                <p className="text-xs text-[#86868B] dark:text-gray-400 line-clamp-2 leading-relaxed font-light">
                  Compassionate family law expert focused on amicable resolutions and child welfare.
                </p>
                <button className="w-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black py-3 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm">
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Lawyer 3 */}
            <div className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800 group h-full">
              <div className="h-24 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-white dark:to-[#1C1C1E]"></div>
              </div>
              <div className="relative px-6 -mt-12 pb-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-[#1C1C1E] shadow-md z-10">
                  <img alt="Aman Gupta" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkikuJLu4BtusLgLi31F4PlgIb4UJ82bddxpxx-uAJMDkSQrIEqRpS5RzoTZgRFU6y2AxHXQf6lplMZfej3qBACM0f1TNTrS1I07j5k5n7IL4opmGkdLNX6QU5zDSz3sHXtd9zed4Ht0o3CrFLYGvz9DHLHZDi0fy2mNHAohav6h9T3ddTVXAk3Xb_WvaTXUl2xlumluRBHnyIKDOZwPJRKOJ68SWwjJJ7B0XH1BE19AzHPkhh--hP90lL_6juM5HAJsu115gCrWa" />
                </div>
                <h3 className="font-semibold text-lg text-[#1D1D1F] dark:text-white">Adv. Aman Gupta</h3>
                <p className="text-[#0071e3] text-xs font-medium mb-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Corporate Law</p>
                <div className="flex items-center text-xs text-[#86868B] gap-1 mb-4">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Mandi, HP
                </div>
              </div>
              <div className="px-6 py-4 border-t border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-center bg-gray-50/50 dark:bg-white/5">
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Exp</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white">15 Yrs</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Success</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white text-green-600 dark:text-green-400">94%</p>
                </div>
              </div>
              <div className="p-6 mt-auto flex flex-col gap-4">
                <p className="text-xs text-[#86868B] dark:text-gray-400 line-clamp-2 leading-relaxed font-light">
                  Corporate law specialist with extensive M&amp;A and compliance expertise.
                </p>
                <button className="w-full bg-gray-100 text-gray-400 cursor-not-allowed py-3 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 dark:bg-gray-800" disabled>
                  Fully Booked
                </button>
              </div>
            </div>

            {/* Lawyer 4 */}
            <div className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800 group h-full">
              <div className="h-24 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-white dark:to-[#1C1C1E]"></div>
              </div>
              <div className="relative px-6 -mt-12 pb-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-[#1C1C1E] shadow-md z-10">
                  <img alt="Riya Malhotra" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH1Bv28SLk0A1rCagoJVExGn2JQUmipZqbUH4VZ7zXdlKZylXxchP3bP5H_VZoDkKNf0HLsKwGxu5uFqeVW5HZG4LrNJuOyOthPLmCcYPu5p6u0gxAUIkGewnS8WuPcnfzEiObAq81Lw2SoMrnk0MO1wbhjrk6YRXs-1DI7MDVMydRJnXX76Jz7ktNxRcOe-n1NXxQG-mMmoaWefCTsGtrpXLshe5Dsws91wdQBCdEU6d_bKmcssth-uzD_vo5uBSzerd3u5GbkA06" />
                </div>
                <h3 className="font-semibold text-lg text-[#1D1D1F] dark:text-white">Adv. Riya Malhotra</h3>
                <p className="text-[#0071e3] text-xs font-medium mb-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Property Law</p>
                <div className="flex items-center text-xs text-[#86868B] gap-1 mb-4">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Kangra, HP
                </div>
              </div>
              <div className="px-6 py-4 border-t border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-center bg-gray-50/50 dark:bg-white/5">
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Exp</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white">8 Yrs</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <p className="text-[10px] uppercase text-[#86868B] font-medium tracking-wide">Success</p>
                  <p className="font-semibold text-[#1D1D1F] dark:text-white text-green-600 dark:text-green-400">99%</p>
                </div>
              </div>
              <div className="p-6 mt-auto flex flex-col gap-4">
                <p className="text-xs text-[#86868B] dark:text-gray-400 line-clamp-2 leading-relaxed font-light">
                  Real estate law expert helping clients navigate property transactions.
                </p>
                <button className="w-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black py-3 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
