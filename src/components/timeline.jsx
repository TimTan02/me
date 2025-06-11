import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Digital Church Office <span>2025-present</span></h2>
                        <p>I recently have joined the Digital Church Office as an intern. Most of my work would be to develop applications that will be used by different bodies of the Catholic Church of Singapore. It is amazing and wondrous to see how traditional religious institutions are able to utilise the newest technologies to streamline and improve existing processes.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate studies at National University of Singapore <span>2023-2027</span></h2>
                        <p>I am currently pursuing my undergraduate studies majoring in Business Analytics. My course provides me with an all-round education, being a multidisciplinary program that blends data science, statistics, business, and computing into one. I have been trained to leverage data-driven insights for strategic decision-making in a wide range of industries. My core focus is on Financial Analytics, with it being my specialisation for the course.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>'A' levels in Anglo-Chinese Junior College <span>2019-2020</span></h2>
                        <p>I studied Biology, Chemistry and Mathematics at H2 level and Economics at H1 level, attaining AAA/A for the aforementioned subjects with a score of 88.75 rank points for my A levels.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
