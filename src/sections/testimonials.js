import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';
import { Link } from 'components/link';



import icon1 from 'assets/icons/image 25(4).png';
import icon2 from 'assets/icons/image 27(1).png';
import icon3 from 'assets/icons/image 28(1).png';
import icon4 from 'assets/icons/image 31(3).png';
import icon5 from 'assets/icons/image 32.png';
import icon6 from 'assets/icons/image 33.png';
import icon7 from 'assets/icons/image 34.png';
import icon8 from 'assets/icons/image 35(1).png';

const SERVICES_DATA = [
  
  {
    icon: icon1,
    title: 'Healthcare',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
      path:'/data'
  },
  {
    icon: icon2,
   title:'Retail',
    text:
     'Get your blood tests delivered at home collect a sample from the your blood tests.',
    
    },
  {
    icon: icon3,
    title: 'Education',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon4,
    title: 'Government',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon5,
    title:'Fintech',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon6,
    title: 'Media & Entertainment',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon7,
    title: 'Agriculture',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon8,
    title: 'Real Estate',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

const Services = (props) => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Quality features"
          title="Meet exciting feature of app"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              
              <Heading as="h3">{service.title}</Heading>
              
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',
   
    pt: ['80px', null, null, null, null, null, '140px'],
    pb: ['80px', null, null, null, null, null, '40px'],
    
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '120px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'white',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 4],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'primary',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};