import React from 'react';
import './Aboutus4.css';
import { Link } from 'react-router-dom';

function Aboutus4() {
  return (
    <div className="core-values-section">
      <h1 className="core-title">Our Core Values</h1>
      <p className="core-subtitle">
        The moral values that a company stands by are what separates the good ones from the best.
      </p>

      <div className="core-cards">
        <div className="core-card">
          <h3>Innovation-Driven Solutions</h3>
          <p>
            We harness innovation to solve <br/> complex challenges, exploring <br/> new technologies and creative <br/>
            approaches to deliver cutting- <br/> edge, effective solutions.
          </p>
        </div>

        <div className="core-card">
          <h3>Commitment to Excellence</h3>
          <p>
            Quality is our priority. From <br/> concept to delivery, we uphold <br/> rigorous standards to ensure <br/>
            reliable, robust, and high-quality <br/> solutions.
          </p>
        </div>

        <div className="core-card">
          <h3>Integrity and Accountability</h3>
          <p>
            We uphold honesty, integrity, and <br/> accountability, taking full <br/> responsibility for delivering <br/>
            projects on time and within <br/> budget.
          </p>
        </div>
      </div>
      <div className='abt-box'>
      <div className='abt-yelbox'
      ><h1>Want to talk about your project? </h1>
      <Link to={'/contactus'}><button className='abt-lstbtn'>Schedule meeting</button></Link>
      </div>
      </div>
    </div>
  );
}

export default Aboutus4;