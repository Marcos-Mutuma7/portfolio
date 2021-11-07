import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';
import { Link } from 'components/link';



import icon1 from 'assets/icons/image 25(4).png';
import icon2 from 'assets/icons/image 27(1).png';
import icon3 from 'assets/icons/image 28(1).png';
import icon4 from 'assets/icons/image 51.png';
import icon5 from 'assets/icons/image 32.png';
import icon6 from 'assets/icons/image 52.png';
import icon7 from 'assets/icons/image 53.png';
import icon8 from 'assets/icons/image 35(1).png';

const SERVICES_DATA = [
  
  {
    icon: icon1,
    title: 'Healthcare',
    text:
      ' Medical software development helps create solutions to eliminate human error, streamline workflow, and manage medical data more effectively and efficiently.',
      path:'/data'
  },
  {
    icon: icon2,
   title:'Retail',
    text:
     'Retailers can benefit from custom retail development software applications because it allows multiple services and streamlines the entire business in one place. ',
    
    },
  {
    icon: icon3,
    title: 'Education',
    text:
      'Technology provides students with easy-to-access information, accelerated learning, and fun opportunities to practice what they learn.',
  },
  {
    icon: icon4,
    title: 'Government',
    text:
      'An emboldened level of citizen expectation for streamlined service delivery and transparency has pushed local governments to explore innovative solutions      to keep up with residents demands.'
  },
  {
    icon: icon5,
    title:'Fintech',
    text:
      'Fintech and mobile technology have made it possible to combine physical and digital payment methods into a single interface that consolidates various bank accounts or cards.',
  },
  {
    icon: icon6,
    title: 'Media & Entertainment',
    text:
      ' With the advances in technology we are enabled to complete more tasks in less time, and often times, with less effort and more productivity. ',
  },
  {
    icon: icon7,
    title: 'Agriculture',
    text:
      'Crop management suggests plant growth monitoring and prediction of yields. ERP allows collecting information regarding crop conditions, work of personnel, farming activities with further analysis and planning',
  },
  {
    icon: icon8,
    title: 'Real Estate',
    text:
      'Real estate software solutions enable you to become a pro in the market by catering to all your customer issues efficiently. Not only that, but you can even enhance your services and can automate all your tedious tasks with real estate apps and software solutions.',
  },
];

const Services = (props) => {
  return (
    <Box sx={styles.services} id="services">
       <BlockTitle
          slogan="Who are our clients?"
          title="Top industries that we provide our services"
          styles={styles.blockTitle}
        />
      <Container>
       
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
    
    overflow: 'hidden',
   
    pt: ['80px', null, null, null, null, null, '180px'],
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
  marginTop:'60px'
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
      fontSize: ['18px', null, null, 5],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'heading',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '16px'],
      color: 'heading',
      opacity:'.6',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};