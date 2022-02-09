import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="footer-content">
            <div className="items">
              <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipisicing elit. Laboriosam atque recusandae <br />
                in sit sunt molestiae aliquid fugit.<br />
                Mollitia eaque tempore iure sit nobis? Vitae <br />
                nemo, optio maiores numquam quis recusandae.</p> <br /> <br />
            </div>
            <div className="items">
              <h3>Quick links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/About">About Us</a></li> <br />
              </ul>
            </div>
            <div className="items">
              <h3>Online Platform</h3>
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li> <br />
              </ul>
            </div>
            <div className="items">
              <h3>Find Us</h3>
              <ul>
                <p style={{ FontSize: 12 }}>Fun Olympic</p> <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.876899690649!2d85.34207391470092!3d27.690199332853016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19477a3b1aa5%3A0xcbb9e534aee93322!2sPrismasofts%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1619717549048!5m2!1sen!2snp" width="250rem" height="130" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </ul>
            </div>

          </div>
          <p className="end">Copyright © 2020. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
