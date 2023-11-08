import '../../App.css';
import React from 'react';

function Navbar() {
  return (
    <nav width="100%">
      <a href="/" class="underline-hover">
        Home
      </a>
      <a href="https://drive.google.com/file/d/13XTRj41Dq8-jOmIHfNdUvYYIV7KSzvNg/view?usp=sharing" class="underline-hover">
        Resume
      </a>
      <a href="/projects" class="underline-hover">
        Projects
      </a>
      <a href="/about" class="underline-hover">
        About Me
      </a>
    </nav>
  );
}

export default Navbar;
