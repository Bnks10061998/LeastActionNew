import React from "react";
import { Card, CardContent } from "../Components/Card";
import "./CEOFounder.css";
import CEOimage from "../assets/founder1.jpg";
import cofounderimage from "../assets/vishnu.jpg";
import logo from "../assets/la.jpg";

const CEOIntroCard = () => {
  return (
    <div className="ceo-intro-container">
      <div className="ceo-intro-content">
        {/* Heading */}
        <div className="ceo-intro-heading-block">
          <div className="logo-with-name">
            <img src={logo} alt="Least Action Logo" className="company-logo" />
            <div className="company-name">Least Action</div>
          </div>
          <h2 className="section-title">
            <span className="highlight-orange">Meet Our Founder</span>
            <br />
            and <span className="highlight-blue">Co-Founder</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="card-group">
          {/* Founder */}
          <Card className="ceo-card">
            <CardContent className="angled-card-content">
              <div className="image-wrapper">
                {/* <img src={CEOimage} alt="CEO" className="angled-image" /> */}
              </div>
              <div className="card-label">Founder & CEO</div>
              <div className="card-text">
                <h2 className="card-name">Gopinath G</h2>
              </div>
            </CardContent>
          </Card>

          {/* Co-Founder */}
          <Card className="director-card">
            <CardContent className="card-content">
              <div className="image-wrapper">
                {/* <img src={cofounderimage} alt="Co-Founder" className="card-image"/> */}
              </div>
              <div className="card-labels">Co-Founder</div>
              <div className="card-text">
                <h2 className="card-names">Adhivishnu K</h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CEOIntroCard;
