import React, { Component } from 'react';
import './Home.css';

import { Footer, Header, Project } from './components';

const Home = () => (
  <div className="Home">
    <Header />
    <Project
      className="project-1"
      contentTitle="Carbon Doomsday"
      contentSubtitle="React/Redux/CSS"
      contentText="Worked with one other developer to create the frontend prototype for this open source project. I am still one of the main team members working on Carbon Doomsday, alongside a small team from around the world."
      link="http://carbondoomsday.com/"
    />
    <Project
      className="project-2"
      contentTitle="react-responsive-navbar"
      contentSubtitle="NPM Package"
      contentText="I built this easy to use, completely customisable React navigation bar component."
      link="https://www.npmjs.com/package/react-responsive-navbar"
    />
    <Project
      className="project-3"
      contentTitle="Pause Hostel & Animal Sanctury"
      contentSubtitle="React/Redux/CSS/Wordpress"
      contentText="I built the entire frontend of this website for this Mexican non-profit organisation. The backend was created with the Wordpress Rest API and the frontend in React/Redux."
      link="http://www.pausehostel.com/"
    />
    <Project
      className="project-4"
      contentTitle="Paddyhuiy Illustration"
      contentSubtitle="React/CSS/Contentful"
      contentText="A portfolio site for an Irish illustrator. I used Contentful as a CMS so he could chop and change the content and images on the site as he pleased."
      link="http://www.paddhuiy.com/"
    />
    <Project
      className="project-5"
      contentTitle="HelloFresh Shop"
      contentSubtitle="CSS-in-JS"
      contentText="An example of some of the work I completed during my internship at HelloFresh. I did all of the stylings for their new shop page in CSS-in-JS."
      link="http://www.hellofresh.com/shop"
    />
    <div className="project-6">
      <p>
        Just for fun:{' '}
        <a href="https://stephanieinez.github.io/compliment-insult-generator/">
          Compliment and Insult Generator
        </a>
      </p>
      <p>JavaScript/CSS</p>
      <p>
        Made this one rainy day for laughs. Feel free to send me a compliment
        (or insult if you're that way inclined). Try it below!
      </p>
      <object
        type="text/html"
        className="compliment-generator"
        data="https://stephanieinez.github.io/compliment-insult-generator/"
      />
    </div>
    <Footer />
  </div>
);

export default Home;
