import React, { useRef } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';

import FeatureCard from 'components/feature-card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import featureImage1 from 'assets/image 41.png';
import featureImage2 from 'assets/image 22(3).png';
import featureImage3 from 'assets/image 42(1).png';

const FeatureData = [
  {
    image: featureImage1,
    title: 'Blockchain technology',
    comments: '22 Comments',
    path: '/blockchain',
  },
  {
    image: featureImage2,
    title: 'Database management systems',
    comments: '15 Comments',
    path: '/database',
  },
  {
    image: featureImage3,
    title:
      'Artificial intellengence (Ai)',
    comments: '12 Comments',
    path: '/machine',
  },
];

const FeatureOne = () => {
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.features} id="news">
      <Container>
        

        <Swiper {...params} ref={ref}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureOne;

const styles = {
  blockTitle: {
    textAlign: 'center',
  },
  features: {
    pt: ['80px', null, null, null, null, null, '1px'],
    pb: ['80px', null, null, null, '10px'],
    backgroundColor: '#F8FAFC',
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'hidden',
    },
  },
  carouselBtns: {
    display: ['flex', null, null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [2, null, 4, null, 5],
      color: '#BBC7D7',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '15px',
      transition: '500ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};
