import React from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';

import Image from 'components/image';

import Link from 'next/link'
import bannerImg from 'assets/image 31.png';
import bannerImg1 from 'assets/image 32.png';
import bannerImg2 from 'assets/image 33.png';

import bannerImg3 from 'assets/image 34.png';
import bannerImg4 from 'assets/image 77.png'



const ContactBanner = () => {
  return (
    <Box sx={styles.banner} id="banner" id="contacts">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
           Contact us
            </Heading>
            <Text as="p">
            Your satisfaction is our #1 priority <br/>
            We’re in the love business. What’s yours?<br/>
             email : techpulseafrica@gmail.com<br/>
            tel : +2547 5792 9917
            </Text>
            <Box as="form" sx={styles.form}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              
            </Box>
            
          </Box>
          <Box sx={styles.image}>
              <Box sx={styles.media}>
                <Link href="https://twitter.com/MaccosMutuma">
          <Image  src={bannerImg} alt="" sx={styles.img} />
              </Link>
         

         <Link href="https://web.facebook.com/TechPulse-112713557885532">
          <Image src={bannerImg1} alt="" />
          </Link>
          <Link href="https://meet.google.com/">
          <Image src={bannerImg2} alt="" />
          </Link>

          <Link href="https://www.linkedin.com/company/77019210/admin/">
          <Image src={bannerImg3} alt="" />
          </Link>

          
          
          
          
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactBanner;

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '240px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color:'rgba(31, 58, 147, 1)',
      fontWeight: 'bold',
      lineHeight: [1.19],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '10px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [ '25px' ,6, null, null, '45px', null, '40px', '52px'],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 1.73],
      opacity:[.7],
      color: 'heading',
      mb: ['20px', null, null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '50px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 16px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
      alignItems:'center'
    },
  },
  image: {  
    
    img:{
      transition: '500ms',
  borderRadius: '10px',
  cursor:'pointer',
  '&:hover': {
    boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    transform: 'scale(0.95)'
  },
  
    },
    
    image: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'null'],
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
