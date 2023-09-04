import '../../App.css';
import React from 'react';

function Navbar() {
  return (
    <nav width="100%">
      <a href="/resume" class="underline-hover">
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
