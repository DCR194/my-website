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
      <WorkExperience></WorkExperience>
      <br />
      <ignore>This is a test of something to come</ignore>
    </>
  );
}

export default Resume;
