import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-text font-effect-anaglyph">stephanie tassone</div>
    <div className="info-wrapper">
      <ResponsiveMenu
        menuOpenButton={
          <div className="info-control font-effect-anaglyph">about</div>
        }
        menuCloseButton={
          <div className="info-control font-effect-anaglyph">close</div>
        }
        changeMenuOn="2000px"
        smallMenuClassName="info-dropdown"
        menu={
          <div className="info-text">
            Hey there! I'm Steph, a Europe-based* frontend developer from
            Australia. I work predominantly in React, Redux and CSS.
            <br />
            <br />Until I found my calling as a developer I worked as a
            journalist and marketing manager for 6 years in London and Berlin.
            Since finding myself in the exciting world of web development I've
            worked at HelloFresh in Berlin, built websites for small companies
            in React and contributed on a range of open source projects. <br />
            <br />
            I am one of the rare web developers that loves, loves, loves CSS! I
            have a passion for making a website not only aesthetically pleasing,
            but also upkeep a user-centric design. I enjoy working closely with
            designers to ensure that a website is both beautiful and functional.
            <br />
            <br />My background in marketing and communications also means that
            I create websites with the eye of both a customer and business,
            ensuring that a website is optimised to its full potential.<br />
            <br /> I love travelling and the outdoors, taking the opportunity to
            go exploring at any chance I get. In my spare time I enjoy making
            silly projects (check out my{' '}
            <a href="https://stephanieinez.github.io/compliment-insult-generator/">
              compliment and insult generator
            </a>{' '}
            if you are ever stuck for words), skateboarding, reading and going
            dancing.
            <br />
            <br />
            Why not drop me a line at{' '}
            <a href="mailto:stephanie.tassone@gmail.com">
              stephanie.tassone@gmail.com
            </a>? I'd love to hear from you! &#x1f643;
            <br />
            <br />
            *Currently I am travelling and working remotely. I will be based in
            Barcelona from summer 2018 onwards.
          </div>
        }
      />
    </div>
  </div>
);

export default Header;
