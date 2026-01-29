import "./Home.css";
import lawyer_booking from "../assets/lawyer_booking.webp"
import Speciality from "./Speciality";
import Cards from "./Cards";

const Home = () => {
  return (
  <>
  <div><section className="home">
      <div className="home-container">
        <div className="home-left">
          <h1>
            Book Appointment <br />
            With Trusted Lawyers
          </h1>
          <p>
            Simply browse through our extensive list of trusted lawyers,
            schedule your appointment hassle-free.
          </p>
          <button className="home-btn">
            Book appointment →
          </button>
        </div>

        <div className="home-right">
          <img src={lawyer_booking} alt="Lawyers" />
        </div>
      </div>
    </section></div>
      <div><Speciality/></div>
   <div><Cards/></div>
   </> 
  );
};

export default Home;
