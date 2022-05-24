import React from "react";
import "./Ourstore.css"

const Tableware = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row justify-content-center outstore-content">

                        <h1>Sustainable Packaging<br />Solution</h1>

                        <div className="card-main"></div>
                        <div className="col-md-3 sustinable">
                            <div class="card ">
                                <img src="./image/box1.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;15850.00</p>
                                    <h3>Takeaway Box (1000ml)<br /><span>(pack of 1000)</span></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 sustinable">
                            <div class="card">
                                <img src="./image/box2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;12850.00
                                    </p>
                                    <h3>Takeaway Box (750ml)<br /><span>(pack of 1000)</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 sustinable">
                            <div class="card">
                                <img src="./image/box3.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">&#8377;11850.00
                                    </p>
                                    <h3>Takeaway Box (500ml)<br /><span>(pack of 1000)</span></h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section >
        </>
    );
};

export default Tableware;