import "./Contact.css";


export default function LawyerContact() {
return (
<div className="contact-wrapper">
<h1 className="contact-title">Contact Us</h1>
<p className="contact-subtitle">
Our legal professionals are committed to protecting your rights and
providing clear, strategic legal guidance you can trust.
</p>


<div className="contact-container">
{/* Left Card */}
<div className="contact-info-card">
<h3>Contact Information</h3>
<p>
If you need legal advice, representation, or have general inquiries,
please reach out to our law office. All consultations are handled
with complete confidentiality.
</p>


<ul className="info-list">
<li>📞 +91 9876543210</li>
<li>✉️ legal.support@Project.com</li>
<li>📍 Ghumarwin, District Bilaspur, Himachal Pradesh, India</li>
</ul>
</div>


{/* Right Card */}
<div className="contact-form-card">
<h3>Get Legal Assistance</h3>
<p>
Submit your details and a member of our legal support team will
contact you shortly to discuss your case.
</p>


<form className="contact-form">
<input type="text" placeholder="Full Name" />
<input type="text" placeholder="Phone Number" />
<input type="email" placeholder="Email Address" />
<textarea placeholder="Briefly describe your legal issue" rows="4" />


<button type="submit">Request Consultation ➜</button>
</form>
</div>
</div>
</div>
);
}