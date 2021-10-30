import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner mb-5px">
            <div className="row mb-10px">
                <div className="col-md-6 mt-5">
                    <h1><span className="text-white">Team Work</span> <br /> <span className="team">I am passionate and I travel the world  <br /> not just as a tourist <br /> but to understand cultures.</span></h1>
                </div>
                <div className="col-md-6 mt-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  "
                                src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-1-slider-bckgr-image-1.jpg " alt="First-Slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-1-slider-bckgr-image-2.jpg" alt="Second-slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50"
                                src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-1-slider-bckgr-image-3.jpg
                            " alt="Third-slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;