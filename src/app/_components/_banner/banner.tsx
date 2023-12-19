import { Carousel, Col, Row } from 'antd';
import React from 'react';
import styles from './styles.module.css';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Banner: React.FC = () => {
  const slides = [
    {
      title: 'Your budget friendly haven',
      pitch: 'CheapSpot efficiently discovers products that offer both affordability and high quality, ensuring each item represents a great bargain.',
    },
    {
      title: 'We offer the most affordable options',
      pitch: 'Experience unparalleled affordability without compromising on impeccable quality! Explore our range of budget-friendly solutions that cater to most needs.',
    },
    {
      title: 'Free delivery',
      pitch: 'Browse and shop worry-free at CheapSpot; we\'ve got your deliveries covered.',
    },
    {
      title: 'Quality products',
      pitch: 'Discover excellence in every purchase with our premium range of quality products, elevating your satisfaction to new heights.',
    },
  ]

  return(
  <Row>
    <Col span={1} />
    <Col span={22} >
      <Carousel className="rounded-lg bg-gradient-to-r from-black to-black/20 bg-opacity-10" autoplay>
        {
          slides.map((slide, index)=>{
            return (
                <div key={index} className="flex flex-col justify-center items-center px-3 py-5 h-30" >
                  <h1 className={`${styles.title} text-lg md:text-xl`}>{slide.title}</h1>
                  <p className={`${styles.title} text-xs md:text-sm`}>{slide.pitch}</p>
                </div>
            )
          })
        }
      </Carousel>
    </Col>
    <Col span={1} />
  </Row>
);}

export default Banner;