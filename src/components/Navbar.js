import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'; 

export default function Navbar(props) {
  return (
    <>
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a mx-3" href="#">{props.aboutext}</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#">Contact Us</a>
          </li>
        </ul>
        <form className="d-flex mx-5" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>

        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-info mx-1" onClick={props.changeMode}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode1} style={{ backgroundColor: '#fd7e14', color: 'white' }}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode2} style={{ backgroundColor: 'rgb(76, 175, 80)', color: 'white' }}></button>
                <button type="button" className="btn mx-1" onClick={props.changeMode3} style={{ backgroundColor: '#6f42c1', color: 'white' }}></button>
                <label className={`form-check-label mx-1 text-${props.mode==='light'?'dark':'light'}`}>Enable other Mode</label>
            </div>
          </div>                                   
  
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input mx-1" type="checkbox"  onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label mx-1" htmlFor="switchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
                </div>
      </div>
    </div>
  </nav>
  </>
  );
}


Navbar.propTypes = { 
  title :PropTypes.string,
  aboutext : PropTypes.string

}

Navbar.defaultProps = {
  title : 'Set title here',
  aboutext : 'About textutils'
}


