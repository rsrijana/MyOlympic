import React from 'react';
// import "../Pages/video";

// https://bbbootstrap.com/snippets/bootstrap-like-comment-share-section-comment-box-63008805 ,
// https://youtu.be/poTc5rqvSTU  
export const Video = () => {
    function like()
    {
        alert("you like the video");
    }
    function getpost()
    {
        var posts = document.getElementById('post').value;
        document.getElementById("comment").value=posts;
    }
    return (
        <div className="Vsection">
            <div className="vide">
                <iframe width="645" height="445" src="https://www.youtube.com/embed/tyC4mwdTMmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="Comment">
                    <div className="Box">

                        <div className="CbxHeader">
                            <img src="https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg" alt="avatar image" height={60} width={60} /> <br />
                            <span>lisa</span>
                        </div>
                         <div className="comm">
                             <label htmlFor="Comment">Comments</label>
                             <input id="post" type="text" placeholder="say something....!!" />

                             <button onClick={getpost} >Post</button>
                             <button id="Cancel">Cancel</button>
                         </div>
                         <input id="comment" type="text"  />
                         {/* <p id="comment"></p> */}
                    </div>
                </div>
                <div className="Feedback">
                </div>
            </div>
            <div className="Vicon">
                <i className="fa fa-heart" aria-hidden="true" onClick={(like)}></i>
                <i className="fa fa-comment" aria-hidden="true"></i>
                <i className="fa fa-share" aria-hidden="true"></i>
            </div>

        </div>

    )
};

