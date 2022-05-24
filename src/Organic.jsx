import React from "react";
import "./Ourstore.css"

const Organic = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row justify-content-center outstore-content">

                        <h1>Oganic Products</h1>

                        <div className="card-main"></div>
                        <div className="col-md-3 sustinable">
                            <div class="card ">
                                <img src="./image/ghee.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;720.00</p>
                                    <h3>Gaumatram A2 Vedic Cow Ghee<br /><span>300ml</span></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 sustinable">
                            <div class="card">
                                <img src="./image/ghee.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;1000.00
                                    </p>
                                    <h3>Gaumatram A2 Vedic Cow Ghee<br /><span>500ml</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 sustinable">
                            <div class="card">
                                <img src="./image/ghee.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;1500.00
                                    </p>
                                    <h3>Gaumatram A2 Vedic Cow Ghee<br /><span>1000ml</span></h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section >
        </>
    );
};

export default Organic;