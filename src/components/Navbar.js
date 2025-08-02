import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-2 gap-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" id='nav-item' aria-current="page" to="/" style={props.mode === 'light'?{color: 'black'}:{color: 'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a mx-3" id='nav-item' to="/about" style={props.mode === 'light'?{color: 'black'}:{color: 'white'}}>{props.aboutext}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" id='nav-item' to="/contact" style={props.mode === 'light'?{color: 'black'}:{color: 'white'}}>Contact Us</Link>
              </li>
            </ul>
           .<div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-2 mt-lg-0">
            <div  className="btn-toolbar ms-lg-3 mt-2 mt-lg-0" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-info mx-1" onClick={props.changeMode}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode1} style={{ backgroundColor: '#fd7e14', color: 'white' }}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode2} style={{ backgroundColor: 'rgb(76, 175, 80)', color: 'white' }}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode3} style={{ backgroundColor: '#6f42c1', color: 'white' }}></button>
                <label className={`form-check-label mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enable other Mode</label>
              </div>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input mx-1" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault" />
              <label className="form-check-label mx-1" htmlFor="switchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutext: PropTypes.string

}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutext: 'About textutils'
}


