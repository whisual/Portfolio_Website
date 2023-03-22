import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />

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
      </div>
    </>
  );
};

export default Education;