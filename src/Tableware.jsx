import React from "react";
import "./Ourstore.css"

const Tableware = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row justify-content-center outstore-content">

                        <h1>Tableware</h1>
                        
        <div className="card-main"></div>
                        <div className="col-md-3 ">
                            <div class="card">
                                <img src="./image/supoon1.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">SS Straws Straight (Pack of 5)<br/> &#8377;264.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card">
                                <img src="./image/supoon2.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Bamboo Cutlery Set<br/> &#8377;385</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card">
                                <img src="./image/supoon3.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Bamboo Supoon(pack of 5) <br/>&#8377;485</p>
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