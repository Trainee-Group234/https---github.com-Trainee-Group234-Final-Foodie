import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.png'
import image3 from '../images/img3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function imageslider() {
    return (
        <div >
            <Carousel controls={false} fade={true} pause={false}>
                <Carousel.Item interval={2900}>
                    <img
                    className="d-block w-100"
                    src={image1} height="500px" width="600px"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-success">Burger Mania</h3>
                    <p className="text-danger opacity-75 bg-gradient-active shadow-lg">don't be sad…we live in a world with cheeseburgers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2900}>
                    <img
                    className="d-block w-100"
                    src={image2} height="500px" width="600px"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-active">Special Offer</h3>
                    <p className="text-active opacity-75 bg-gradient-active shadow-lg">KNOCK KNOCK IT'S TUESDAY OFFER</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2900}>
                    <img
                    className="d-block w-100"
                    src={image3} height="500px" width="600px"
                    alt="Third slide"
                    />

                    <Carousel.Caption >
                    <h3 className="text-dark">What is Masala Dosa ?</h3>
                    <p className="text-activeopacity-75 bg-gradient-active shadow-lg"> It's Potato Wrapped in Love</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}
