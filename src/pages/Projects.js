import React from 'react'
import Header from "../components/Header";

const Projects = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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
                <h3 class="mb-1">CRYPTO SEARCH</h3>
                <div class="subheading mb-3">CREATED A CRYPTO SEARCH WEBSITE BY FETCHING API DATA USING HTML, CSS, BOOTSTRAP, JAVASCRIPT.</div>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-1">Mini Projects</h3>
                <div class="subheading mb-0">MADE A CALCULATOR</div>
                <div class="subheading mb-0">MADE A CALENDER</div>
                <div class="subheading mb-0">MADE A TODO APP</div>
                <div class="subheading mb-0">MADE A DIGITAL CLOCK</div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
