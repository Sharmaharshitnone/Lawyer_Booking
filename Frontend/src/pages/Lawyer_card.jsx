import "./Lawyer_card.css";

const lawyers = [
  { name: "Adv. Rahul Sharma", type: "Criminal Lawyer" },
  { name: "Adv. Neha Verma", type: "Family Lawyer" },
  { name: "Adv. Amit Singh", type: "Corporate Lawyer" },
  { name: "Adv. Priya Mehta", type: "Criminal Lawyer" },
  { name: "Adv. Disha Yadav ", type: "Civil Lawyer" },
];

const Lawyer_card = ({ selected }) => {
  return (
    <div className="right">
      {lawyers
        .filter((lawyer) => lawyer.type === selected)
        .map((lawyer, index) => (
          <div className="card" key={index}>
            <div className="img"></div>
            <h4>{lawyer.name}</h4>
            <p>{lawyer.type}</p>
          </div>
        ))}
    </div>
  );
};

export default Lawyer_card;