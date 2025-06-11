import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am currently studying Business Analytics in National University of Singapore (NUS). I am also a member of the NUS Catholic Students' Society, a group of like-minded individuals who place God in the center of our lives. Together, we grow stronger in faith and learn to love God's people.</p>
                    <p>For this summer, I am thankful to have the opportunity to intern at the Digital Church Office, which is probably one of the few places in Singapore that I can practise my faith openly while at work. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Thinking out of the box</h3>
                    <p>In this field, I have to be constantly on my toes, always thinking creatively and adapting to new challenges.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Mobile-savvy</h3>
                    <p>Once a mobile game addict, I have garnered sufficient first-hand experience to build customer-centric mobile applications </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Crazy over money</h3>
                    <p>Not in the conventional sense :) I have a 2nd Major in Economics, and it's just so fascinating to see how money makes the world go round.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
