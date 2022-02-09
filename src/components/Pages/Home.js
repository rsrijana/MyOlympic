 // import React from "react";
import React, { Component } from "react";
// import bnr from '../../images/bnr.png';
import wallpaper from '../../images/wallpaper.jpg';
import Care from '../../images/Care.png'
import Teams from '../../images/team.jpg'
import Community from '../../images/Community.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import Youtube from "react-youtube";



// export const Home extends Component= () => {
export class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,

      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 3000,
      // initialSlide: 0,
      autoplay: 9000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="banner">
          <img src={(wallpaper)} />
        </div>
        <div className="bnr_text">
          <h1><span>The world Cup</span> lets begin with Olympic......!!</h1>
          <br></br><p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incidunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus comodo viverra maecenas accumsan lacus vel facilisis.</p>
          <a class="ac" href="our_course.html">Explore now</a>
          <a href="index.html">Take a Tour</a>
          {/* <Link to="/register"><button className="btn"> Sign Up</button></Link> */}
          {/* <Link to="/register"><button  className="btn"> Register</button></Link> */}
        </div>

        <div className="services">
          <h2>SERVICES</h2>

          <div className="row">
            <div className="column">
              <div className="card">
                <img src={(Care)} style={{ height: 200 }} />
                <h4>Customer Care</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Sed suscipit tortor non luctus e  uismod. Nunc placerat et augue <br />
                  eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /> <br />
                  <button className="btn_services" style={{backgroundColor: "#198754" }}>Learn More</button>
                </p>

              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={(Teams)} style={{ height: 200 }} />
                <h4>Our Staff Member</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
                  eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /><br />
                  <button className="btn_services" style={{backgroundColor: "#198754" }}>Learn More</button>
                </p>
              </div>
            </div>


            <div className="column">
              <div className="card">
                <img src={(Community)} style={{ height: 200 }} />
                <h4>Our community</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
                  eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /><br />
                  <button className="btn_services" style={{backgroundColor: "#198754" }}>Learn More</button>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* slider section */}

        <div className="sliders">
          <h2>Olympic Winners</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div>
              <img src="https://storage.googleapis.com/afs-prod/media/4045caf1adcd4c258c4a953c08ed7a0f/3000.jpeg" height="170rem" width="170rem" /> <br />
              {/* <h4>Cardiologist</h4> */}
              <p>Jackline</p> <br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br /><br /><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_cIDbEICQZ-_9m_U91-1ukW6qMGMCfT6_Q&usqp=CAU" height="170rem" width="170rem" /> <br />
              {/* <h4>Dermatologists</h4> */}
              <p>Anuvab </p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://static.onecms.io/wp-content/uploads/sites/20/2021/08/02/GettyImages-1331869607-2000.jpg" height="170rem" width="170rem" /> <br />
              {/* <h4>Ophthalmologists</h4> */}
              <p>Satikshya</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXD0tu_GirxV1u66ttGDaXghLhRyzOjLulg&usqp=CAU" height="170rem" width="170rem" /> <br />
              {/* <h4>Gynecologists</h4> */}
              <p>Sam</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToijMgzJ_xefM2NlbnpEaU7JBjtqr_uuzkwg&usqp=CAU" height="170rem" width="170rem" /> <br />
              {/* <h4>Endocrinologists</h4> */}
              <p>Anna</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3kAV-3zwfppAhVxIJKtsrE6QV72jw4MVPA&usqp=CAU" height="170rem" width="170rem" /> <br />
              {/* <h4>Gastroenterologists</h4> */}
              <p>Kamala</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://api.time.com/wp-content/uploads/2021/07/australia-gold-medal.jpg" height="170rem" width="170rem" /> <br />
              {/* <h4>Nephrologists</h4> */}
              <p>Anubhav</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://images.outlookindia.com/public/uploads/gallery/20210807/bajrang_9_20210807_400_600.jpg" height="170rem" width="170rem" /> <br />
              {/* <h4>Med. Geneticists</h4> */}
              <p>Pratik</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>

          </Slider>
          {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div> */}
        </div>

        {/******* live section *********/}

        <ul id="rig">
          <h1>Watch Live Games</h1>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/tyC4mwdTMmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <video src={(v1)} height={200}></video> */}
              {/* <span class="rig-overlay"></span>
              <span class="rig-text">Lorem Ipsum Dolor</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/ssEzTsg0reE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v2)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Consectetur Adipiscing</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
              
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/xS1-wiHPkQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v3)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Vivamus ut Felis</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/Ccia1-hkBdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v4)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Curabitur tempus</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/CwzjlmBLfrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v5)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Sed et nunc luctus</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/he03dVkhLTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v6)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Suspendisse tellus</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/kdhGTv5DOdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v7)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">pellentesque odio</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/6bNOnXTe4Ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src={(v8)} height={200}></video>
              <span class="rig-overlay"></span>
              <span class="rig-text">Nam euismod</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/5mLnuCORMrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <span class="rig-overlay"></span>
              <span class="rig-text">Vestibulum ultricies</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/McYaRSOZeGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <span class="rig-overlay"></span>
              <span class="rig-text">quis interdum sapien</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/5s9RKu9Irqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <span class="rig-overlay"></span>
              <span class="rig-text">Maecenas vitae</span> */}
              <a href="/video">Comment</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
          <li>
            <a class="rig-cell" href="#">
            <iframe width="320" height="315" src="https://www.youtube.com/embed/ow4OfLD1C5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <span class="rig-overlay"></span>
              <span class="rig-text">Proin Scelerisque</span> */}
              <a href="/video">For more</a><br />
              {/* <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-comment" aria-hidden="true"></i> */}
              {/* <i class="fa fa-video-camera" aria-hidden="true"></i> */}
              {/* <i class="fa fa-share" aria-hidden="true"></i> */}
            </a>
          </li>
        </ul>



        {/****** Appointment form *****/}

        {/* <div className="form_container">
          <div className="appointment-form">
            <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_800/https://www.gastropune.com/wp-content/uploads/2019/03/ApmntsColor-FbYbnnwQ-1.png" height="30%" width="30%" />
          </div>
          <div className="appointment-content">
            <h2>Book Appointment</h2> <br />
            <fieldset className="field">
              <legend>Please provide your information..!!</legend>
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Full First</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your full name.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Contact No</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="ContactNo" name="ContactNo" placeholder="Your contact number.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Email</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="email" name="emailId" placeholder="Your email address.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Choose Specialist</label>

                  </div>
                  <div className="col-75">
                    <select id="specialist" name="specialist">
                      <option value="volvo">Cardiologist</option>
                      <option value="saab">Dermatologists</option>
                      <option value="opel">Ophthalmologists</option>
                      <option value="audi">Gynecologists</option>
                      <option value="audi">Endocrinologists</option>
                      <option value="audi">Gastroenterologists</option>
                      <option value="audi">Nephrologists</option>
                      <option value="audi">Other</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Queries">Queries..?</label>
                  </div>
                  <div className="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 100 }}></textarea>
                  </div>
                </div>
                <div className="row">
                  <input type="submit" className="submit" value="Submit" />
                </div>
              </form>
            </fieldset>
          </div>
        </div> */}
      </div >
    );
  }
};
// };
