import {Carousel} from 'react-bootstrap'
import Image from 'next/image'

function ControlledCarousel() {

    return (
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/3.png"
            alt="Picture of the author"
            layout='fill'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src="/img/2.jpg"
                alt="Picture of the author"
                layout='fill'
            />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
                className="d-block w-100"
                src="/img/1.jpg"
                alt="Picture of the author"
                layout='fill'
            />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel;
  