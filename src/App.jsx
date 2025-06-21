import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './Resume';
import resumeLogo from './assets/resume-logo.svg';
import studiesLogo from './assets/epitech.svg';
import C from './assets/C.png';
import CPlus from './assets/C++.png';
import Python from './assets/python.png';
import Angular from './assets/angular.png';
import React from './assets/react.png';
import CSharp from './assets/CSharp.png';
import Aspnet from './assets/asp-net.png';
import NodeJS from './assets/nodejs.png';
import Github from './assets/github.png';
import Docker from './assets/docker.png';
import './App.css';

function Portfolio({ projects, testimonials, carouselRef }) {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Hi, I'm Noam Bouillet!</h1>
        <p className="role">I'm currently a Full Stack Developer at ADTi, making a C# and Angular based app.</p>
        <p className="bio">
          I enjoy learning cybersecurity, making my own Active Directory lab, practicing web-pentesting, learning low-level languages through Epitech and self-teaching.
        </p>
        <div className="skills">
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Languages:</strong></li>
            <span className="logo" data-label="C"><img src={C} alt="C" /></span>
            <span className="logo" data-label="C++"><img src={CPlus} alt="C++" /></span>
            <span className="logo" data-label="Python"><img src={Python} alt="Python" /></span>

            <li><strong>Front:</strong></li>
            <span className="logo" data-label="React"><img src={React} alt="React" /></span>
            <span className="logo" data-label="Angular"><img src={Angular} alt="Angular" /></span>
            HTML/CSS/JS

            <li><strong>Back:</strong></li>
            <span className="logo" data-label="C#"><img src={CSharp} alt="C#" /></span>
            <span className="logo" data-label="ASP.NET"><img src={Aspnet} alt="ASP.NET" /></span>
            <span className="logo" data-label="NodeJS"><img src={NodeJS} alt="NodeJS" /></span>

            <li><strong>Tools:</strong></li>
            <span className="logo" data-label="GitHub"><img src={Github} alt="GitHub" /></span>
            <span className="logo" data-label="Docker"><img src={Docker} alt="Docker" /></span>
            <span className="logo" data-label="TDD"><img src={CPlus} alt="TDD" /></span>
            TDD
          </ul>
        </div>
      </header>

      <section className="py-16 px-6 bg-gray-100 min-h-screen" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.name}>
              {project.name === "My Resume" ? (
                <Link to="/resume">
                  <button
                    className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-center bg-cover group shadow-xl"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold tracking-wide text-center px-4">
                        {project.name}
                      </span>
                    </div>
                  </button>
                </Link>
              ) : (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button
                    className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-center bg-cover group shadow-xl"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold tracking-wide text-center px-4">
                        {project.name}
                      </span>
                    </div>
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div
          className="testimonials-carousel"
          ref={carouselRef}
          onMouseEnter={() => (carouselRef.current.style.scrollBehavior = 'smooth')}
          onMouseLeave={() => (carouselRef.current.style.scrollBehavior = 'auto')}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <blockquote>"{testimonial.comment}"</blockquote>
              <p className="testimonial-name">— {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg">Hello Tailwind!</div>

      </section>

      <footer className="footer">
        <p>
          Find me on <a href="https://github.com/NoamBouillet" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

function App() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "John Pork",
      comment: "Noam is a highly motivated developer with a sharp mind for cybersecurity.",
    },
    {
      name: "Cyril Nouhana",
      comment: "It was a pleasure working with Noam on our app. His commitment is unmatched.",
    },
    {
      name: "Brigitte Barbot",
      comment: "Always impressed by Noam’s dedication and work level. Highly recommend.",
    },
    {
      name: "Kobe Brillant",
      comment: "Incredible problem-solver. Cybersecurity is clearly his way.",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        carousel.scrollLeft += 2;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: "My Resume",
      description: "My updated resume in PDF format.",
      image: resumeLogo,
      url: "/resume",
    },
    {
      name: "My Studies",
      description: "All my studies' details, with all my projects and resulting grades.",
      image: studiesLogo,
      url: "https://github.com/NoamBouillet/Epitech",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Portfolio
              projects={projects}
              testimonials={testimonials}
              carouselRef={carouselRef}
            />
          }
        />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;