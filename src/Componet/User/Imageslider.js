import React from 'react'

const Imageslider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/943fc7a0812f3209.jpg?q=20" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f6720ba6b92b67fb.jpg?q=20" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b5ec95451c4f8705.jpg?q=20" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Imageslider
