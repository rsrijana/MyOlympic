import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import blog from '../../images/blog.jpg'
import slider1 from '../../images/banner.jpg'

export const About = () => {
  return (
    <div>
      <div className="banner">
        <img src={(slider1)} />
      </div>
      <div className="bg-text">
        <h3 style={{ fontSize: 40 }}>ABOUT US</h3>
        <button className="btn"> click me</button>
      </div>

      <div className="timeline">
        <div className="container left">
          <div className="content">
          <img src=" https://www.exactcarepharmacy.com/wp-content/uploads/2019/06/hospital-icon-white.png"/> 
            <h2>Established 1996</h2> <br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="containxer right">
          <div className="content">
            <img src="https://c8.alamy.com/comp/2CBDA17/ceo-logo-vector-graphic-design-man-with-suit-businessman-icon-five-stars-executive-boss-symbol-2CBDA17.jpg"/>
          <h2>Message from CEO</h2> <br/>
            <p>Lorem ipsum dolor sit amet, is looking for quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <img src="https://cdn4.vectorstock.com/i/thumb-large/60/78/courthouse-building-isolated-icon-vector-12946078.jpg"/>
            <h2>Executive Committe</h2><br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
          <img src="https://www.colourbox.com/preview/7055362-team-work-icon.jpg"/>
            <h2>Team Work</h2> <br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <img src="https://thumbs.dreamstime.com/b/contribution-icon-capital-209642847.jpg"/>
            <h2>Our Contribution</h2> <br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <img src="https://thumbs.dreamstime.com/b/branch-office-distance-vector-icon-which-can-easily-modify-205085271.jpg"/>
            <h2>Our Branch</h2><br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <img src="https://thumbs.dreamstime.com/b/crowd-people-one-two-three-person-human-silhouette-member-user-icons-team-work-illustration-flat-design-social-200960445.jpg"/>
            <h2>Other Members</h2> <br/>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
