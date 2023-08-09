import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../css/main.css"

const MultiCarousel = () => {
  const carouselRef = React.useRef(null);
 

  const customButtonStyle = {
    background: '#333',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselData = [
    {
        url:
          "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
      },
      {
        url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
      },
      //Second image url
      {
        url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
      },
      //Third image url
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
      },
    
      //Fourth image url
    
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
      }
  ];

  // Custom arrow components
  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  const handleNextClick = () => {

    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-button"  onClick={onClick}>
      &lt; Previous
    </button>
  );

  const CustomRightArrow = ({onClick}) => (
    <button className="custom-button"  onClick={onClick}>
      Next &gt;
    </button>
  );

  return (
    <div className="parent">
      <Carousel
        swipeable={true}
        draggable={true}
        ref={carouselRef}
        arrows ={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}

      >
        {carouselData.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={item.url}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>
        ))}
      </Carousel>
      <div className="custom-button-container">
        <CustomLeftArrow onClick={handlePrevClick} />
        <CustomRightArrow onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default MultiCarousel;