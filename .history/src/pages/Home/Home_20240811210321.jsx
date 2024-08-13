import Infosection from "../../components/Info-Section/Infosection.jsx";
import "./Home.css";
import data from "../../alankrit_data/data.json";
const Home = () => {
  return (
    <div className="home">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="alankrit-khatri"
        data-version="v1"
      >
        {" "}
        </div>

      <div className="about-section">
        <h1 className="name">Alankrit Khatri</h1>
        <p>
          Frontend Developer in the making. Looking for frontend internships &
          projects
        </p>
        <div className="dashed-line"></div>
        <p>
          I love challenging tasks. I am motivated by interesting projects. I
          prefer quick-iterations & prototype-driven work. I hate shaving yaks.
          I love to build.
        </p>
      </div>
      <div className="education-section">
        <h1>Education</h1>
        <Infosection {...data} />
        <Infosection {...data} />
        <Infosection {...data} />
        <Infosection {...data} />
      
        {console.log(data)}
      </div>
    </div>
  );
};

export default Home;
