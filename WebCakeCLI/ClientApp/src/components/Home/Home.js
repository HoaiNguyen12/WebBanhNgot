import React, { Component } from 'react';
import Header from '../Template/Header';
import Slide from './Slide';
import About from './About';
import QT from '../Template/QT';
import Gallery from './Gallery';
import Contact from './Contact';
import CustomReview from './CustomReview';
import Footer from '../Template/Footer';

class Home extends Component {
  //static displayName = Home.name;

  render() {
    return (
      <div>
        <Header />
        <Slide />
        <About />

        <QT />

        <Gallery />

        <CustomReview />

        <Contact />

        <Footer />

        <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>&uarr;</a>

        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.superslides.min.js"></script>
        <script src="js/images-loded.min.js"></script>
        <script src="js/isotope.min.js"></script>
        <script src="js/baguetteBox.min.js"></script>
        <script src="js/form-validator.min.js"></script>
        <script src="js/contact-form-script.js"></script>
        <script src="js/custom.js"></script>
      </div>
    );
  }
}

export default Home;