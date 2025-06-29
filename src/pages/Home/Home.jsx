import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        style={{ width: "40%", height: "100%" }}
        src="https://media.licdn.com/dms/image/v2/D5616AQFC8x2brifUAw/profile-displaybackgroundimage-shrink_350_1400/B56ZdZTnLiHUAY-/0/1749550003653?e=1756944000&v=beta&t=u3e15z4kj9Q2UA2--0g2qUg2JNcstb9tHOQJgXVYyKw"
        alt=""
      />

      <div className="about-section">
        <h1 className="name">Alankrit Khatri</h1>
        <p>Full Stack Engineer at Docstribe AI | Building Keechu.com</p>
        <div className="dashed-line"></div>
      </div>

      <h1>Socials</h1>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="alankrit-khatri"
        data-version="v1"
      ></div>
    </div>
  );
};

export default Home;
