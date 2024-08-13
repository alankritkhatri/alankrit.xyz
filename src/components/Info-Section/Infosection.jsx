import "./infoSection.css";
const Infosection = (props) => {
  return (
    <>
      <div className="infosection-details">
        <img
          src={props[0].educationDetails.bachelors.logo}
          alt=""
          style={{ width: "40px", height: "35px" }}
        />
        <div className=" infosection-info">
          <div className="infosection-info-top ">
            <h2 style={{ opacity: "1", fontWeight: "500" }}>
              {props[0].educationDetails.bachelors.schoolName}
            </h2>
            <div className="dashed-line"></div>
            <h2> {props[0].educationDetails.bachelors.schoolYears} </h2>
          </div>

          <div className="infosection-info-bottom">
            <h2> {props[0].educationDetails.bachelors.course}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infosection;
