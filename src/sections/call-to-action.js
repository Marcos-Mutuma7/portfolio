import React from 'react';
import { keyframes } from '@emotion/react'
import { Box, Container, Heading, Button } from 'theme-ui';
import { NavLink, Link } from 'components/link';
import BgShape from 'assets/cta-shape-1.svg';
import btnShape from 'assets/cta-btn-shape-1.svg';
const CallToAction = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container sx={styles.container}>
        <Box sx={styles.inner}>
          <Heading as="h3">
          Grow your Business From Today
          </Heading>
          <Box sx={styles.btnWrapper}>
            <Link path='/contacts'>
            <Button sx={styles.btn}>START NOW</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  wrapper: {
    
    overflow: 'hidden',
  },
  inner: {
    padding: ['45px 30px 50px', null, null, '45px 50px', null, '45px 70px'],
    mt: [2, null, null, null, '50px'],
    position: 'relative',
    zIndex: '10',
    backgroundColor: 'primary',
    backgroundImage: ['none', null, null, null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
    h3: {
      color:'rgba(31, 58, 147, 1)',
      fontWeight: 'bold',
      fontSize: [5, null, 4, null, null, 6, 7],
      lineHeight: [1.24, null, 1.53],
      padding: ['0 15px', '0'],
      marginBottom: ['50px', null, null, '0'],
      br: {
        display: ['none', null, null, 'inherit'],
      },
    },
  },
  btn: {
    backgroundColor: 'gold',
    color:'black',
    borderRadius: '5px',
    fontSize: [0, 1, null, null, null, null, '17px'],
    fontWeight: '700',
    letterSpacing: '0.1em',
    fontFamily: 'heading',
    padding: ['10px 24px', null, null, null, null, '15px 44px'],
    position: 'relative',
    outline: 'none',
    webkitAppearance: 'none',
    animation: 'beat .25s infinite alternate',
	transformOrigin:'center',
  ransition: '500ms',
  cursor:'pointer',
  
  
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      bottom: 'calc(100% + 10px)',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    '&:after': {
      bottom: 'auto',
      top: 'calc(100% + 10px)',
      transform: 'translateX(-50%) rotate(180deg)',
    },
    '&:hover': {
      backgroundColor: 'black',
      color: 'gold',
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    transform: 'scale(0.95)',
    },
  },
};
