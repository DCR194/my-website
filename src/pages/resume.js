import '../App.css';
import React from 'react';
// import placeholder from '../images/placeholder.jpg';
import WorkExperience from './my-components/workExperience';
import Navbar from './my-components/navbar';

function Resume() {
  return (
    <>
      <header className="App-header">This is my website, I am Diego!</header>
      <h2 id="centered">THIS IS STILL UNDER CONSTRUCTION <br></br>
      please enjoy some narwhals in the meantime :)</h2>
      
      <Navbar />
      <br />
      <WorkExperience />
    </>
  );
}

export default Resume;
