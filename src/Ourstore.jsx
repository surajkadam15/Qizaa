import React from "react";
import "./Ourstore.css"

const Ourstore = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row justify-content-center outstore-content">

                        <h1>Shop All</h1>
                        
        <div className="card-main mt-5"></div>
                        <div className="col-md-3 ">
                            <div class="card">
                                <img src="./image/image1.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Biodegradable Jute Grow Bags 8X 12 &#38; 6X6 inches.<br/> &#8377;55</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card">
                                <img src="./image/image2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Biodegradable Jute Grow Bags 8X 12 with cloth handle<br/> &#8377;135</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card">
                                <img src="./image/image3.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Birchwood Fork(pack of 100)16cm <br/>&#8377;135</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                

            </section >
        </>
    );
};

export default Ourstore;