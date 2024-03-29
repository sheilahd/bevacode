import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import Nav from "react-bootstrap/Nav";
import logoletters from "../../assets/img/cards/logowhitesmall.png";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      {/* <div>
        <Nav.Item
          as="li"
          className="navbar-brand js-scroll-trigger"
          href="#page-top"
        >
          <Link to={ROUTES.HOME}>
            <img className="navbar-brand js-scroll-trigger" src={logoletters} />{" "}
          </Link>
        </Nav.Item>
      </div> */}
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          {!!authUser.roles[ROLES.ADMIN] && (
            <li className="nav-item">
              <Nav.Item as="li" className="nav-link js-scroll-trigger">
                <Link to={ROUTES.ADMIN}>Admin</Link>
              </Nav.Item>
            </li>
          )}
          <li className="nav-item">
            <Nav.Item as="li" className="nav-link js-scroll-trigger">
              <Link to={ROUTES.ADDINSDASHBOARD}> DASHBOARD </Link>
            </Nav.Item>
          </li>

          <Nav.Item as="li" className="nav-link js-scroll-trigger">
            <SignOutButton />
          </Nav.Item>
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <Nav.Item
        as="li"
        className="navbar-brand js-scroll-trigger"
        href="#page-top"
      >
        <Link to={ROUTES.LANDING}>
          <img
            className="navbar-brand js-scroll-trigger"
            style={{ width: 60 }}
            src={logoletters}
          />
        </Link>
      </Nav.Item>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#addinsCards">
              Add-ins
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact
            </a>
          </li>

          {/* <Nav.Item as="li" className="nav-link js-scroll-trigger">
            <Link to={ROUTES.SIGN_IN} className="btn btn-primary btn-md">
              Sign In
            </Link>
          </Nav.Item> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
