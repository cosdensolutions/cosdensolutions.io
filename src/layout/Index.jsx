import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// external dependencies
//
const classNames = require('classnames');

// internal dependencies
//
import Header from 'components/header';
import Footer from 'components/footer';
import ContactModal from './contact-modal';

import Homepage from './homepage';
import Development from './development';
import Coaching from './coaching';

import history from 'utils/history';

const Layout = (props) => {
  // modal
  const [contactModal, setContactModal] = useState(false);

  // content class names
  const contentClassNames = classNames({
    content: true,
    'modal-open': contactModal,
  });

  // history
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className={contentClassNames}>
        <Header setContactModal={setContactModal} />

        <div className="content-body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Homepage setContactModal={setContactModal} />}
            />
            <Route
              exact
              path="/development"
              render={() => <Development setContactModal={setContactModal} />}
            />
            <Route
              exact
              path="/coaching"
              render={() => <Coaching setContactModal={setContactModal} />}
            />
          </Switch>
        </div>

        <div className="content-footer">
          <Footer />
        </div>
      </div>

      {contactModal && (
        <ContactModal closeModal={() => setContactModal(false)} />
      )}
    </>
  );
};

export default withRouter(Layout);
