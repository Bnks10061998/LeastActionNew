import React from 'react';
import './Aboutus3.css'

function Aboutus3() {
  return (
    <div className='abt-libg  mt-0'>
        <div class="row">
        <div class="col-md-6 txt1">
            <h2>Our Mission</h2>
            <div className='abt-pnt'>
                <ul>
                <li className='bullets'>To be recognized as the most reliable and high-quality software <br/> development</li>
                <li className='bullets'>To consistently deliver the services that exceed the client <br/> expectations</li>
                <li className='bullets'>To build long-term relationships based on trust, excellence, and <br/> mutual growth.</li>
                </ul>
            </div>
        </div>
            <div class="col-md-6 img1">
                <img src='http://kosuketechnologies.com/assets/img/mission.svg'/>
            </div>
        </div>
        <div class="row">
        <div class="col-md-6 img2">
        <img src='http://kosuketechnologies.com/assets/img/vision.svg'/>
        </div>
        <div class="col-md-6 txt2">
        <h2>Our Vision</h2>
            <div className='abt-pnt1'>
            <ul>
                <li className='bullets'>To be recognized as a leading web development company that <br/> sets the standard for innovation, quality, and client satisfaction.</li>
                <li className='bullets'>Provide solutions that are effective today and adaptable for <br/> tomorrow, anticipating future trends and challenges.</li>
                <li className='bullets'>To be the leading global partner for innovative software solutions, <br/> driving digital transformation and business success.</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Aboutus3