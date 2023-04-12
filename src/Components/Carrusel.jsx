import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Carrusel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} >
     
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://www.residentevil.com/re4/assets/images/common/share-re.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Proximamente</h3>
        <div className='Row'>
        <i className="fa-brands fa-playstation fa-3xs m-3"></i>
        <i className="fa-brands fa-xbox fa-3xs"></i>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://media.vandal.net/i/1200x630/3-2023/202332311471890_1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Proximamente</h3>
          <div className='Row'>
        <i className="fa-brands fa-playstation fa-3xs m-3"></i>
        <i className="fa-brands fa-xbox fa-3xs"></i>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://media.contentapi.ea.com/content/dam/ea/starwars/star-wars-jedi-survivor/common/swj-survivor-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Proximamente</h3>
          <div className='Row'>
        <i className="fa-brands fa-playstation fa-3xs m-3"></i>
        <i className="fa-brands fa-xbox fa-3xs"></i>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default Carrusel