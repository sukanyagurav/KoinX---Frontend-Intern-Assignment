import React from 'react'
import Card from './Card'
import './About.css'
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';

const About = () => {
  return (
    
    <Card className="about">
      <h2>About Bitcoin</h2>
      <div className="about-1">
      <h4>What is Bitcoin?</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.</p>

      </div>
      <div className="about-2">
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates fugiat blanditiis repellendus, deleniti nesciunt enim aliquam vitae. Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe.</p>
        <p>Asperiores repellat obcaecati quam, exercitationem itaque corrupti! Quaerat, accusamus quis facere deserunt sit, alias reiciendis eligendi modi maiores, quas soluta laborum a? Similique nihil saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi aperiam earum nesciunt distinctio laborum. Sapiente nostrum quo impedit dolor? </p>
      </div>
      <div className="about-3">
        <h2>Already Holding Bitcoin?</h2>
        <div className="about__cards">

        <div className="about__card about__card--1">
          <img src={about1} alt="" />
          <h5>Calculate your profits</h5>
          <button className="about__btn">Check Now</button>
        </div>
        <div className="about__card about__card--2">
          <img src={about2} alt="" />
          <h5>Calculate your tax liability</h5>
          <button className="about__btn">Check Now</button>
        </div>
        </div>
      </div>
      <p>Provident culpa laborum nulla modi obcaecati dicta asperiores similique perspiciatis vitae quis. Asperiores, molestiae eius? Unde, illo incidunt aliquam possimus voluptatem id aspernatur doloremque. Accusamus consequatur hic earum repellat saepe odit praesentium voluptatum nobis qui facere, quasi aliquid laborum iure corrupti perferendis, tenetur reprehenderit non perspiciatis debitis blanditiis rem labore. Quidem necessitatibus, placeat eaque quod iste asperiores velit reiciendis suscipit!</p>
    </Card>
  )
}

export default About
