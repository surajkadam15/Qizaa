import React from "react";
import './Home.css'

const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-md-6 home">
                            <h1>Sustainbility<br />In Your Pocket</h1>
                            <h3>Building future that's exciting</h3>
                            <div className="Button">
                                <a href="" className="btn-get-started">Explore</a>
                            </div>
                        </div>
                    <div className="col-md-4  img-home">
                        <img src="./image/circle.png" alt="" />
                    </div>

                    </div>
                </div>
        
            </section >
        </>
    );
};

export default Home;