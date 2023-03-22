import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Vishal
              <span class="text-primary"> Sharma</span>
            </h1>
            <div class="subheading mb-5">
            Moh. Neel Khudana, Jwalapur, Haridwar, Uttarakhand 
            <div class="my-2">. (+91) 8755733740 ·</div>
              <Link>mvishal1997@gmail.com</Link>
            </div>
            <p class="lead mb-5">
            I'm a fresher web developer, currently enrolled in Geekster bootcamp and learning some coding and scripting languages. Till now i learnt HTML, CSS, Javascript, React.Js, Programming in JAVA, Object Oriented Programming in JAVA, Structured Query Language.
            Now my main goal is to learn Data Structures and Algorithm in 2023
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/vishal-sharma-614702207/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/whisual">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://www.hackerrank.com/imvishal1997">
                <i class="fab fa-hackerrank"></i>
              </a>
              <a class="social-icon" href="https://www.instagram.com/whisual/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
 

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Geekster</h3>
                <div class="subheading mb-3">Full Stack Web Development</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2022 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">College of Engineering Roorkee</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Electrical & Electronics Engineering</div>
                <p>60%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2016 - May 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Bal Mandir Sr. Sec. School</h3>
                <div class="subheading mb-3">Intermidiate</div>
                <p>60%</p>
                <div class="subheading mb-3">High School</div>
                <p>CGPA: 7.2</p>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
              
            </ul>
            </div>
            </section>
        <hr class="m-0" />

        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                HackerRank React Developer
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                SQL/MySQL - Geekster Certification
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="project">
          <div class="resume-section-content">
            <h2 class="mb-5">Projects</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                    <h3 class="mb-1">Portfolio Website</h3>
               
                <div class="subheading mb-3">CREATED A PORTFOLIO WEBSITE WHICH IS RESPONSIVE FOR ALL SCREEN SIZES USING HTML, CSS & REACT JS</div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-1">Weather App</h3>
                <div class="subheading mb-3">CREATED A WEATHER WEBSITE BY FETCHING API DATA USING HTML, CSS, BOOTSTRAP, JAVASCRIPT.</div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-1">Github Repo Search</h3>
                <div class="subheading mb-3">CREATED A GITHUB REPOSITORY SEARCH WEBSITE BY FETCHING API DATA USING HTML, CSS, BOOTSTRAP, JAVASCRIPT.</div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-1">IOT Based Smart City</h3>
                <div class="subheading mb-3">MADE A PROJECT ON IOT BASED SMART CITY TO CONSERVE ENERGY UTILISATION.</div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-1">Mini Projects</h3>
                <div class="subheading mb-0">MADE A CALCULATOR USING REACT JS</div>
                <div class="subheading mb-0">MADE A PROFILE CARD USING HTML AND CSS ONLY</div>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. I also love <b>astronomy</b> and <b>photography</b> .
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of <b>sci-fi</b> and <b>detective</b> genre
              movies and television shows, I am an aspiring <b>chef</b>, and I spend a
              large amount of my free time exploring content and do creative things.
            </p>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Home;