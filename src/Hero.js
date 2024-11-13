import React from 'react';
import './App.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero">
      <img src="student.png" alt="Student with Backpack" />
      <div className="hero-content">
        <h2>700+ students saved, and counting</h2>
        <p>20k new study notes added every day, from the world's most active student communities</p>
        <div className="stats">
          <div className="stat">
            <p>350+</p>
            <p>Study resources</p>
          </div>
          <div className="stat">
            <p>115+</p>
            <p>Institutions</p>
          </div>
          <div className="stat">
            <p>700+</p>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;