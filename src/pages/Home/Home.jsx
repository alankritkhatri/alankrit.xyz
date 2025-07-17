import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about-section ">
        <div className="flex">
          <img
            style={{ width: "10%", height: "100%", borderRadius: "100%" }}
            src="https://media.licdn.com/dms/image/v2/D5603AQEhwQs0aQF_vg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731033452858?e=1758153600&v=beta&t=g-j6lbp7VE_E4wZrpv4K1RNkbd7RQxOVVCLK9yxMKj4"
            alt=""
          />
          <div>
            {" "}
            <h1 className="name">Alankrit Khatri</h1>
            <p>
              Software Engineer at{" "}
              <a href="https://www.linkedin.com/company/docstribe-ai-healthcare/">
                Docstribe AI
              </a>{" "}
              and Building <a href="https://www.keechu.com">Keechu</a>
            </p>
          </div>
        </div>

        <div className="dashed-line"></div>
        <div className="about-text">
          {/* <h1 >
            I love challenging tasks. I am motivated by interesting projects. I
            prefer quick-iterations & prototype-driven work. I hate shaving
            yaks. I love to build.
          </p> */}
        </div>
      </div>
      <h1 className="">Socials </h1>
      <div className="socials-section flex flex-col items-start">
        <ul className="socials">
          <li>
            <a href="https://www.linkedin.com/in/alankrit-khatri/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/alankritkhatri">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/lilkeechu">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="X"
              />
            </a>
          </li>
        </ul>
      </div>

      <h1 className="">OSS </h1>
      <div className="oss-section flex flex-col items-start">
        <ul className="open-source (OSS)">
          <li>
            <a href="https://github.com/alankritkhatri/synqjs">synqjs</a> -
            <span className="text-sm">
              Lightweight & smart messaging queue system for javascript powered
              by redis | Install -> npm i synqjs
            </span>
            <li>
              <span className="text-sm">
                <a href="https://github.com/supermemoryai/supermemory">
                  supermemory
                </a>{" "}
                The universal memory API for the AI era
              </span>
            </li>
          </li>
        </ul>
      </div>

      <h1 className="">Work </h1>
      <div className="work-section flex flex-col items-start">
        <div className="work-item">
          <div className="work-details">
            <h1></h1>
            <p>
              Building Docstribe AI, a platform for AI-powered document analysis
              and summarization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
