import { Carousel, Col, Row } from 'antd';
import React from 'react';
import styles from './styles.module.css';

// function Carousell () {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     {
//       url: '/budget.jpg',
//       title: 'Your budget friendly haven',
//       pitch: 'CheapSpot efficiently discovers products that offer both affordability and high quality, ensuring each item represents a great bargain.',
//       color: 'black'
//     },
//     {
//       url: '/cheap.jpg',
//       title: 'We offer the most affordable options',
//       pitch: 'Experience unparalleled affordability without compromising on impeccable quality! Explore our range of budget-friendly solutions that cater to most needs.',
//       color: 'black'
//     },
//     {
//       url: '/delivery.jpg',
//       title: 'Free delivery',
//       pitch: 'Browse and shop worry-free at CheapSpot; we\'ve got your deliveries covered.',
//       color: 'white'
//     },
//     {
//       url: '/quality.jpg',
//       title: 'Quality products',
//       pitch: 'Discover excellence in every purchase with our premium range of quality products, elevating your satisfaction to new heights.',
//       color: 'black'
//     },
//   ]

//   const prevSlide = ()=>{
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide? slides.length - 1: currentIndex - 1;
//     setCurrentIndex(newIndex);
//   }

//   const nextSlide = ()=>{
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }

//   // window.setInterval(nextSlide, 10000);

//   const jumpToSlideN = ({index}:{index:number})=>(setCurrentIndex(index));

//     return (
//     <div className="w-full h-full relative group">
//       <div className="w-full h-full rounded-lg bg-cover bg-center flex items-end text-center justify-center">
//           <Image src={slides[currentIndex].url} width={10000} height={10000} loading='lazy' alt='' className="absolute w-full h-full rounded-lg transition-all duration-300 ease-in-out"/>
//           <div className="w-full h-full rounded-lg bg-gradient-to-b from-transparent to-black/70 bg-opacity-10 absolute flex flex-col items-center justify-end p-5" style={{color: 'white'}}>
//             <h1 className="text-2xl md:text-4xl font-medium">{slides[currentIndex].title}</h1>
//             <p className="text-xs md:text-xl">{slides[currentIndex].pitch}</p>
//           </div>
//       </div>
//       {/* Left arrow */}
//       <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] left-5 text-lg rounded-full p-2 bg-black/20 text-white cursor-pointer hover:shadow-sm hover:bg-black/40 active:scale-[90%] transition-all duration-300 ease-in-out">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} className="h-5 w-5 md:h-full md:w-full" />
//       </div>

//       {/* Right arrow */}
//       <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] right-5 text-lg rounded-full p-2 bg-black/20 text-white cursor-pointer hover:shadow-sm hover:bg-black/40 active:scale-[90%] transition-all duration-300 ease-in-out">
//         <BsChevronCompactRight onClick={nextSlide} size={30} className="h-5 w-5 md:h-full md:w-full" />
//       </div>
//       <div className='flex justify-center my-2'>
//         {
//           slides.map((slide, index)=>{
//             return (
//               <RxDotFilled onClick={()=>{jumpToSlideN({index})}} key={index} className="hover:scale-[200%] active:scale-[150%] mx-[5px] transition-all duration-300 ease-in-out" />
//             )
//           })
//         }
//       </div>
//     </div>
//     );
// }

// function Banner () {
//     return (
//         <div className="px-3 md:px-14">
//             <div className="border rounded-lg w-full aspect-video bg-gray-200">
//                 <Carousell />
//             </div>
//         </div>
//     );
// }

// export default Banner;


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