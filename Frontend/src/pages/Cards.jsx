import "./Cards.css";

const lawyers = [
  {
    name: "Adv. Rahul Sharma",
    type: "Criminal Lawyer",
    image: "/lawyer1.png",
    available: true,
  },
  {
    name: "Adv. Neha Verma",
    type: "Family Lawyer",
    image: "/lawyer2.png",
    available: true,
  },
  {
    name: "Adv. Aman Gupta",
    type: "Corporate Lawyer",
    image: "/lawyer3.png",
    available: true,
  },
  {
    name: "Adv. Riya Malhotra",
    type: "Property Lawyer",
    image: "/lawyer4.png",
    available: true,
  },
  {
    name: "Adv. Kunal Mehta",
    type: "Cyber Lawyer",
    image: "/lawyer5.png",
    available: true,
  },
  {
    name: "Adv. Tanya Kashyap",
    type: "Civil Lawyer",
    image: "/lawyer6.png",
    available: true,
  },
];

const TopLawyers = () => {
  return (
    <section className="top-lawyers-wrapper">
      <div className="top-lawyers">
        <h2>Top Lawyers to Book</h2>
        <p>Simply browse through our trusted and verified lawyers.</p>

        <div className="lawyer-grid">
          {lawyers.map((lawyer, index) => (
            <div className="lawyer-card" key={index}>
              <img src={lawyer.image} alt={lawyer.name} />

              <div className="lawyer-info">
                <span className="status">
                  <span className="dot"></span> Available
                </span>
                <h4>{lawyer.name}</h4>
                <p>{lawyer.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopLawyers;
