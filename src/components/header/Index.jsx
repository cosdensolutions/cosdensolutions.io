import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// internal dependencies
//
import Logo from 'components/logo';

const Header = (props) => {
  const { setContactModal } = props;

  // toggles contact modal
  const toggleContactModal = (e) => {
    e.preventDefault();
    setContactModal(true);
  };

  // menu
  const [showMenu, setShowMenu] = useState(false);
  const mobileMenu = useRef(null);
  useEffect(() => {
    if (showMenu) {
      mobileMenu.current.style.right = '0px';
    } else {
      mobileMenu.current.style.right = '-80%';
    }
  }, [showMenu]);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">
          <NavLink to="/development" activeClassName="is-active">
            Development
          </NavLink>
          <NavLink to="/coaching" activeClassName="is-active">
            Coaching
          </NavLink>
          <a href="" onClick={(e) => toggleContactModal(e)}>
            Contact
          </a>
        </div>

        <div
          className="header__mobile-menu-toggle"
          onClick={() => setShowMenu(true)}
        >
          <i className="fas fa-bars" />
        </div>

        <div ref={mobileMenu} className="header__mobile-menu">
          <div
            className="header__mobile-menu-header"
            onClick={() => setShowMenu(false)}
          >
            <i className="fas fa-times" />
          </div>

          <div className="header__mobile-menu-links">
            <NavLink
              to="/development"
              onClick={() => setShowMenu(false)}
              activeClassName="active"
            >
              Development
            </NavLink>
            <NavLink
              to="/coaching"
              onClick={() => setShowMenu(false)}
              activeClassName="active"
            >
              Coaching
            </NavLink>
            <a href="" onClick={(e) => toggleContactModal(e)}>
              Contact
            </a>
          </div>

          <div className="header__mobile-menu-logo">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
