import '../../App.css';
import React from 'react';

function Navbar() {
  return (
    <>
    <nav width="100%">
      <div>

      <a href="/" class="underline-hover">
        Home
      </a>
      </div>
      <div class="navbarmid">

      <a href="/projects" class="underline-hover centeredtxt">
        Projects
      </a>
      </div>

      <div>
      <a href="https://drive.google.com/file/d/13XTRj41Dq8-jOmIHfNdUvYYIV7KSzvNg/view?usp=sharing" class="underline-hover">
        Resume  
      </a>
      </div>
    </nav>

    <nav width="100%">
      <div>

      <a href="/about" class="underline-hover">
        About Me
      </a>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
