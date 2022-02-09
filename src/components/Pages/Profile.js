import React from 'react';
import "../Pages/Profile.css";

export const Profile = () => {
    return (
        <div>
            <div className="P-wrapper">
                <div className="left">
                    <img src="https://static.onecms.io/wp-content/uploads/sites/20/2021/08/02/GettyImages-1331869607-2000.jpg" alt="user" width="100"/>
                    <h4>Edward</h4>
                    <p></p>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Email</h4>
                                <p>alex@gmail.com</p>
                            </div>
                            <div className="data">
                                <h4>Phone</h4>
                                <p>0001-213-998761</p>
                            </div>
                        </div>
                    </div>

                    <div className="projects">
                        <h3>Projects</h3>
                        <div className="projects_data">
                            <div className="data">
                                <h4>Recent</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="data">
                                <h4>Most Viewed</h4>
                                <p>dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div class="social_media">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

