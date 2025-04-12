import React from "react";

function About({ bio, github, linkedin }) {
  // Define Links component inside About
  function Links({ github, linkedin }) {
    return (
      <div>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <br />
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }

  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Conditionally render bio */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Render Links */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
