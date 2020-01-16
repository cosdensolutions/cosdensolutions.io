import React, { useState, useEffect } from 'react';

// internal dependencies
//
import Button from 'components/button';

const Coaching = (props) => {
  const { setContactModal } = props;

  // sets page title
  useEffect(() => {
    document.title = 'Coaching | Cosden Solutions';
  });

  return (
    <>
      <div className="coaching">
        <div className="coaching__section-bg light-purple">
          <div className="coaching__section first">
            <div className="coaching__section-content">
              <div className="coaching__section-headline">
                <h2>Hire Us For React Coaching</h2>
                <h1>Coaching</h1>
              </div>

              <div className="coaching__section-subheadline">
                <p>
                  We offer an online coaching service to teach React. We will
                  work with you individually to bring you to the expected
                  standard of a React developer. This program is designed for
                  people who want to quickly learn React and get straight to
                  coding.
                </p>
              </div>

              <Button
                text="Get In Touch"
                onClick={() => setContactModal(true)}
              />
            </div>
            <div className="coaching__section-image">
              <img src="/assets/img/shared/coaching.png" />
            </div>
          </div>
        </div>
        <div className="wave-container">
          <div className="wave light-purple" />
        </div>
      </div>

      <div className="coaching__section-bg">
        <div className="coaching__section column">
          <div className="coaching__section-headline center">
            <h2>How You'll Learn React</h2>
            <h1>The Program</h1>
          </div>

          <div className="program">
            <div className="program-step">
              <div className="number">#1</div>
              <h2>Personalized Assessment</h2>
              <p>
                We will assess your current level of programming as well as your
                goals with regards to React. Through this assessment we will
                create a customized plan that will work the best for you.
              </p>
            </div>

            <div className="program-step">
              <div className="number">#2</div>
              <h2>Coaching Program</h2>
              <p>
                You will begin the one month coaching program with bi-weekly
                lessons, assignments, and progress tracking. This is an
                accelerated program and is meant to teach you React very
                quickly.
              </p>
            </div>

            <div className="program-step">
              <div className="number">#3</div>
              <h2>Final Project (optional)</h2>
              <p>
                You will build a project in React from start to finish to put in
                practice everything that you've learnt so far. This step is
                after the month of coaching and is optional for those who want
                to just get the coaching and move on.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="coaching__section-bg main-purple">
        <div className="coaching__section ">
          <div className="coaching__schedule-call">
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

export default Coaching;
