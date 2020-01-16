import React, { useState, useEffect } from 'react';

// internal dependencies
//
import Button from 'components/button';

const Development = (props) => {
  const { setContactModal } = props;

  // sets page title
  useEffect(() => {
    document.title = 'Development | Cosden Solutions';
  });

  return (
    <>
      <div className="development">
        <div className="development__section-bg light-purple">
          <div className="development__section first">
            <div className="development__section-image">
              <img src="/assets/img/shared/development.png" />
            </div>
            <div className="development__section-content">
              <div className="development__section-headline">
                <h2>Hire Us For Web App Development</h2>
                <h1>Development</h1>
              </div>

              <div className="development__section-subheadline">
                <p>
                  We are a full-stack web development team and we specialize in
                  building single page applications (SPA's) with React. We can
                  build out the front-end as well as the back-end for a fully
                  functional web application that is fully customized to your
                  needs.
                </p>
              </div>

              <Button
                text="Get In Touch"
                onClick={() => setContactModal(true)}
              />
            </div>
          </div>
        </div>
        <div className="wave-container">
          <div className="wave light-purple" />
        </div>

        <div className="development__section-bg">
          <div className="development__section column">
            <div className="development__section-headline centered">
              <h2>See Our Previous Work</h2>
              <h1>Projects</h1>
            </div>

            <div className="projects-container">
              <div className="project">
                <div className="project-image left">
                  <img src="/assets/img/development/projects-convert.png" />
                </div>

                <div className="project-content">
                  <h2>Let's Convert</h2>
                  <p>
                    This project consisted of building an image converter that
                    would allow users to efficiently transform one image format
                    to another. It included 9 different conversion formats, a
                    fully integrated payment system with enforced limits and
                    variable tiers, a custom built api to allow 3rd parties to
                    convert easily, and a fully custom user dashboard.
                  </p>
                  <a
                    className="button"
                    href="https://www.letsconvert.app"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="project mobile-inverted">
                <div className="project-content">
                  <h2>Kiid Babysitting</h2>
                  <p>
                    This project consisted of building an online booking
                    platform for parents to book babysitters on demand. It
                    included managing babysitter availabilities in real-time, a
                    custom parent dashboard to manage bookings, a babysitter
                    dashboard for them to set their availabilities, and an
                    administration panel for custom bookings and managing the
                    website content.
                  </p>
                  <a className="button" href="https://kiid.ca" target="_blank">
                    View Project
                  </a>
                </div>

                <div className="project-image right">
                  <img src="/assets/img/development/projects-kiid.png" />
                </div>
              </div>

              <div className="project">
                <div className="project-image left">
                  <img src="/assets/img/development/projects-tob.png" />
                </div>

                <div className="project-content">
                  <h2>Bashir Persian Rugs</h2>
                  <p>
                    This project consisted of building a back-end CMS solution
                    to manage customers and inventory. This project needed to be
                    custom built to be integrated to existing protocols within
                    the company. It featured excel invoice integration, eBay
                    File Exchange integration, a fully managed inventory system,
                    integration with social media e-commerce platforms, and a
                    port of the existing website to React.
                  </p>
                  <a
                    className="button"
                    href="https://www.bashircarpets.com/en"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="project mobile-inverted">
                <div className="project-content">
                  <h2>st-Art Amsterdam</h2>
                  <p>
                    This project consisted of building an online art gallery
                    where artists could upload their artworks and display them
                    for buyers to purchase. It also included events and the
                    ability for users to RSVP, as well as a custom built
                    administration panel to manage the application content for
                    the administrators.
                  </p>
                  <a
                    className="button"
                    href="https://www.st-artamsterdam.com"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>

                <div className="project-image right">
                  <img src="/assets/img/development/projects-start.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="development__section-bg main-purple">
        <div className="development__section ">
          <div className="development__schedule-call">
            <h1>Schedule a free consultation call</h1>
            <Button
              secondary
              text="Get In Touch"
              onClick={() => setContactModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
