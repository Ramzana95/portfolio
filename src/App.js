import React, { Component } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import ContactUs from './components/ContactUs.js';
import Footer from './components/Footer.js';
import resumeData from './resumeData.js';
import './default.css';
import './fonts.css';
import './layout.css';
import './magnific-popup.css';
import './media-queries.css';
import img1 from './images/weatherAppSC.jpeg';


class App extends Component {

  render() {

    return(

      <div className = "App">

        <Header resumeData = {resumeData}/>

        <About resumeData = {resumeData}/>

        <Resume resumeData = {resumeData}/>

        <Portfolio resumeData = {resumeData}/>

        <ContactUs resumeData = {resumeData}/>

        <Footer resumeData = {resumeData}/>

      </div>
    );

  }

}


export default App;
