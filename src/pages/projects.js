import '../App.css';
import React from 'react';
// import placeholder from '../images/placeholder.jpg';
// import WorkExperience from './my-components/workExperience';
import Navbar from './my-components/navbar';

function Projects() {
  return (
    <>
      <Navbar />
      <br/>
      <div class="projects_window_height">
        <ul class="underline-hover">
            <li href="/resume">Particle Collision Simulator</li>
        </ul>
      </div>
      <h2 id="centered"> I am still working on some details of this web page<br/>
      I will continue to roll out updates over time</h2>
    </>
  );
}

export default Projects;
