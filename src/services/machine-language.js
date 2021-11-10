import React, { useState } from 'react';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { FaAngleRight, FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import BlockTitle from 'components/block-title';
import videoImg from 'assets/image 28.png';

const MachineLanguage = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" sx={styles.video}>
      <Container>
      <BlockTitle
         title="Programming Languages"
          styles={styles.blockTitle}
        />
        <Box sx={styles.videoBox}>
          <Image src={videoImg} alt="" />
          
            
               </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="Cm3U-NgJb9I"
        onClose={() => setVideoOpen(false)}
      />
    </Box>
  );
};

export default MachineLanguage;

const styles = {
  video: {
    pt: [10, null, null, null, null, '80px', '100px'],
    pb:'100px',
         textAlign: 'center',
        
    
    br: {
      display: ['none', null, null, 'inherit'],
    },
  },
  videoBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '>img': {
      borderRadius: '10px',
      display: 'flex',
      width: ['90%', null, null, null, '70%', null, '80%'],
    },
  },
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    mt: ['15px', null, null, null, '0px'],
    mb: ['20px', null, null, '50px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
  videoBtn: {
    width: [44, null, 44, 66, 120],
    height: [44, null, 44, 66, 120],
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: '500ms ease',
    svg: {
      fontSize: ['15px', null, '15px', null, '22px', '35px'],
      color: ['primary'],
    },
    '&:hover': {
      backgroundColor: 'primary',
      svg: {
        color: '#fff',
      },
    },
  },
};
