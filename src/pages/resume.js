import '../App.css';
import React from 'react';
// import placeholder from '../images/placeholder.jpg';
import WorkExperience from './my-components/workExperience';
import Navbar from './my-components/navbar';

function Resume() {
  return (
    <>
      <header className="App-header">This is my website, I am Diego!</header>
      
      <Navbar />
      <br />
      <WorkExperience />
      
      <h2 id="centered"> I am still working on some details of this web page<br/>
      I will continue to roll out updates over time</h2>
    </>
  );
}

export default Resume;
