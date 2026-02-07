import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-[#86868B] dark:text-gray-500 pt-20 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <span className="font-bold text-xl tracking-tight text-[#1D1D1F] dark:text-white">NyayBooker</span>
            <p className="mt-4 text-xs leading-relaxed max-w-xs font-light">
              The modern standard for legal appointments. Connecting you with justice, efficiently and securely.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-[#1D1D1F] dark:text-white mb-4 text-sm">Platform</h4>
            <ul className="space-y-3 text-xs">
              <li><Link className="hover:text-[#0071e3] transition" to="/lawyers">Find Lawyers</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/about">How it Works</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/pricing">Pricing</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/login">Login</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[#1D1D1F] dark:text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-xs">
              <li><Link className="hover:text-[#0071e3] transition" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/terms">Terms of Service</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-[#1D1D1F] dark:text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-3 text-xs">
              <li><Link className="hover:text-[#0071e3] transition" to="/help">Help Center</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-[#0071e3] transition" to="/faqs">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px]">
          <p>© 2026 NyayBooker. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-[#1D1D1F] dark:hover:text-white transition" href="#">Twitter</a>
            <a className="hover:text-[#1D1D1F] dark:hover:text-white transition" href="#">LinkedIn</a>
            <a className="hover:text-[#1D1D1F] dark:hover:text-white transition" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
