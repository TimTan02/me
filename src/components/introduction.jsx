import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{ color: 'white' }}>Hello! <br />I'm Timothy</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1h9qybK1NEQYYgLbcS-V5ob8Rlyy6DC2_/edit?usp=sharing&ouid=102157997527759573188&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: 'white' }}>I love learning new THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/TimTan02" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: 'white' }}>Lorem Ipsum </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
