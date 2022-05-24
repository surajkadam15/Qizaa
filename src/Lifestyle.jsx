import React from "react";
import "./Ourstore.css"

const Lifestyle = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row justify-content-center outstore-content">

                        <h1>Lifestyle Products</h1>
                        
        <div className="card-main"></div>
                        <div className="col-md-3 Lifestyle">
                            <div class="card">
                                <img src="./image/pen3.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Seed Pen (Pack of 5)<br/> &#8377;110.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 Lifestyle">
                            <div class="card">
                                <img src="./image/pen2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Canvas Box-Bag-Cotton<br/> &#8377;88.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 Lifestyle">
                            <div class="card">
                                <img src="./image/pen1.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Bamboo Toothbrush For Adults<br/>&#8377;134.00</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                

            </section >
        </>
    );
};

export default Lifestyle;