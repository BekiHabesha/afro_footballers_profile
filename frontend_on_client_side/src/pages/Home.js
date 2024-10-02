// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom'; // Importing Link for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css'; // Add a CSS file for Home component styling
import Efflogo from '../assets/images/Efflogo.png';  // Import your image
import EPLSharecomplogo from '../assets/images/EPLSharecomplogo.png';  // Import your image
import Intro from '../components/Intro'; // Importing the Intro component
//
const Home = () => {
       	
	const videoStyle = {
		width: '450px',
		height: '370px',
		margin: '10px',
	};

	const videoStyle1 = {
		width: '1350px',
		height: '570px',
		margin: '10px',
	};

	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};
const beggcontainerStyle = {
  display: 'flex',         // Use Flexbox for layout
  alignItems: 'none',    // Vertically align items to the center
  justifyContent: 'center', // Center all items horizontally
  gap: '15px',             // Adds space between items
  padding: '0px',         // Optional: padding around the content
  backgroundColor: 'white',
  marginLeft: '5px',             // Remove default margin for the heading
  marginRight: '5px',
};

const beggtextStyle = {
  margin: '0',             // Remove default margin for the heading
  fontSize: '40px',        // Optional: adjust font size as needed
  textAlign: 'center',     // Optional: center-align the text
  backgroundColor: 'white',
  textDecoration: 'underline',
};

const midtextStyle = {
  marginLeft: '15px',             // Remove default margin for the heading
  marginRight: '15px',             // Remove default margin for the heading
  fontSize: '17px',        // Optional: adjust font size as needed
  textAlign: 'left',     // Optional: center-align the text
  color: '#008080',
};

	return (
                <div>
      <Header />

      {/* Your home page content here */}

      <main className="home-content">
        {/* Your main content goes here */}

    <div style={beggcontainerStyle}>
      {/* Ethiopian Football Federation Logo */}
      <a href="https://www.facebook.com/ethiopiaff" target="_self">
        <img
          src={Efflogo}
          alt="Eff Logo"
          style={{ width: '110px', height: '60px', cursor: 'pointer' }}
        />
      </a>

      {/* Text aligned between the logos */}
      <h1 style={beggtextStyle}>
        WELCOME TO AFRO FOOTBALLERS PROFILE HOME PAGE
      </h1>

      {/* Ethiopian Premiere League S.C Logo */}
      <a href="https://www.facebook.com/ethiopianpremierleaguesc" target="_self">
        <img
          src={EPLSharecomplogo}
          alt="EPLSC Logo"
          style={{ width: '110px', height: '60px', cursor: 'pointer' }}
        />
      </a>
    </div>

<h2 style={midtextStyle}>This Web App gives you Footballers Profile of Different Ethiopian Leagues, You can Explore the latest player and coach profiles, club statistics, and more in details. Also, You can get weekly Ethiopian Premier League Match Highlight Videos, Results, Table and so much more. Click EFF and EPLSc Logo to navige their page. Enjoy!</h2>

                    <div>
		      <Intro />
		    </div>

                <div style={containerStyle}>
                <iframe
                style={videoStyle1}
                src="https://www.youtube.com/embed/fJr6vfRjJGU"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                ></iframe>
                </div>

		{/* YouTube videos side by side */}
		<div style={containerStyle}>
		<iframe
		style={videoStyle}
		src="https://www.youtube.com/embed/QzhOz4ssw2E"
		title="YouTube video player 1"
		frameBorder="0"
		allowFullScreen
		></iframe>
		<iframe
		style={videoStyle}
		src="https://www.youtube.com/embed/xDvHBwnnwhA"
		title="YouTube video player 2"
		frameBorder="0"
		allowFullScreen
		></iframe>
		<iframe
		style={videoStyle}
		src="https://www.youtube.com/embed/fJr6vfRjJGU"
		title="YouTube video player 3"
		frameBorder="0"
		allowFullScreen
		></iframe>
		</div>

		<div style={containerStyle}>
		<iframe
		style={videoStyle1}
		src="https://www.youtube.com/embed/fJr6vfRjJGU"
		title="YouTube video player"
		frameBorder="0"
		allowFullScreen
		></iframe>
                </div>
      </main>
     <Footer />
    </div>
 );
};

export default Home;
