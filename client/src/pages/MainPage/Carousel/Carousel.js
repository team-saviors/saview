import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const banner1 =
  'https://saview-dev.s3.ap-northeast-2.amazonaws.com/Saview/banner/banner1.png';
const banner2 =
  'https://saview-dev.s3.ap-northeast-2.amazonaws.com/Saview/banner/banner2.png';
const banners = [banner1, banner2];
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= banners.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(banners.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const transform = () => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  };
  useEffect(() => {
    transform();
  }, [currentSlide]);

  return (
    <div
      className="carousel"
      style={{
        width: '100%',
        height: '600px',
        margin: 'auto',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <SliderContainer ref={slideRef}>
        {banners.map((banner) => {
          return (
            <img
              src={banner}
              alt={banner}
              key={banner}
              style={{ width: '100%', height: '600px', flexShrink: '0' }}
            ></img>
          );
        })}
      </SliderContainer>
      <Center>
        <ChevronLeftIcon
          onClick={prevSlide}
          style={{ color: 'white', cursor: 'pointer' }}
        ></ChevronLeftIcon>

        {banners.map((banner, idx) => {
          return (
            <Indicator
              active={currentSlide === idx}
              key={idx}
              onClick={() => setCurrentSlide(idx)}
            ></Indicator>
          );
        })}
        <ChevronRightIcon
          onClick={nextSlide}
          style={{ color: 'white', cursor: 'pointer' }}
        ></ChevronRightIcon>
      </Center>
    </div>
  );
};
export default Carousel;

const Indicator = styled.div`
  border-radius: 50%;
  background: #fff;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  position: relative;
  top: 0;
  cursor: pointer;
  margin: 0 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 0px;
  display: flex;
`;

const Center = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
