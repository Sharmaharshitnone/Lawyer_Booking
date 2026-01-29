import "./Speciality.css";

const specialties = [
  { name: "Criminal Lawyer", icon: "⚖️" },
  { name: "Family Lawyer", icon: "👨‍👩‍👧" },
  { name: "Corporate Lawyer", icon: "🏢" },
  { name: "Property Lawyer", icon: "🏠" },
  { name: "Cyber Lawyer", icon: "💻" },
  { name: "Civil Lawyer", icon: "📜" },
];

const Speciality = () => {
  return (
    <section className="speciality-section">
      <h2>Find by Speciality</h2>
      <p>
        Simply browse through our extensive list of trusted lawyers,
        schedule your appointment hassle-free.
      </p>

      <div className="speciality-container">
        {specialties.map((item, index) => (
          <div className="speciality-card" key={index}>
            <div className="icon-circle">
              <span>{item.icon}</span>
            </div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speciality;
