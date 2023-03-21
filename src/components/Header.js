import React  from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import LanguagueButton from './LanguageButton';

// import styled from 'styled-components'

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false
  }; 

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div>

      {/* <div id="preloader">
        <div className="loader_line"></div>
      </div> */}


        
        <div className="loadingpage">
            <div className="counter">
              <p>0</p>
            </div>
        </div> 
       

        <div className="">
          <a className="logotipo" href="/">
              <img src="../assets/images/logotipo.svg" alt="logotipo" />
          </a>  
          

          <div className="menu-toggle">
            <div className='idioma'>
              <LanguagueButton/>
            </div>
            <Menu right isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Home <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/studies">Studies <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/mindset">Mindset <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/uxcases">UX Cases <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/portfolio">Portfolio <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
                <Link onClick={() => this.closeMenu()} className="menu-item" to="/article">Artículos <img src="assets/images/arrow.svg" alt="arrow" className="arrowgreen"/></Link>
            </Menu>


          </div>
        </div>
        <div className="lines finish ready">
          <div className="content">
            <div className="line-col"></div>
            <div className="line-col"></div>
            <div className="line-col"></div>
            <div className="line-col"></div>
            <div className="line-col"></div>
          </div>
        </div>
      </div>
    );
  }
}
