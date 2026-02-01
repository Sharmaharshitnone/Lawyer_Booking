import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "WHAT IS NYAY BOOKER?",
    answer: "Nyay Booker is a premier legal platform that connects you with expert lawyers instantly. Whether you need a quick Online Consultation or want to Pre-Book a Chamber Visit to meet a lawyer offline, Nyay Booker makes legal help accessible, fast, and secure."
  },
  {
    question: "ARE THE LAWYERS VERIFIED?",
    answer: "Quality is our priority. We strictly onboard advocates who are enrolled with the Bar Council and have a proven track record. Every lawyer’s credentials are manually verified before they go live on Nyay Booker."
  },
  {
    question: "DO I NEED TO PAY IN ADVANCE FOR AN OFFICE VISIT?",
    answer: "Yes, a booking fee is required to confirm your slot. This guarantees that the lawyer reserves that specific time exclusively for you, ensuring you meet them immediately upon arrival without waiting."
  },
  {
    question: "WHAT IS YOUR REFUND POLICY IF THE LAWYER DOESN'T SHOW UP?",
    answer: "We value your time. If a lawyer misses a scheduled appointment (Online or Offline), we offer a 'No-Questions-Asked' full refund or an immediate priority rescheduling with a senior expert."
  },
  {
    question: "IS MY DATA AND CASE INFORMATION PRIVATE?",
    answer: "Absolutely. We adhere to strict Attorney-Client Privilege standards. Your discussions are end-to-end encrypted, and no case details are shared with third parties without your consent."
  }
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Questions?</h2>
            <h3 className="text-xl text-slate-300 mb-4">We're here to help</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Check out our FAQs or talk to a live customer care specialist
              by phone, chat, or email.
            </p>

            <div className="flex gap-4">
              <Link to="/contact" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
              </Link>
              <Link to="/contact" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
              </Link>
              <Link to="/contact" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </Link>
            </div>
          </div>

          {/* Right Section (FAQs) */}
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-200">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
