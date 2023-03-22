import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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

export default Interest;