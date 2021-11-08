import React from 'react';
import Image from 'next/image';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import image1 from 'assets/image 25(6).png';
import image2 from 'assets/image 51.png';
import image3 from 'assets/image 27(2).png';
import image4 from 'assets/1.png'
import image5 from 'assets/image 52.png'
import image6 from 'assets/image 53.png'
const FEATURES_DATA = {
  title: 'Industries that use customized softwares',
  text: 'Inspiring the generation',
  posts: [
   
    {
      image: image1,
      title: 'Healthcare',
      text:
        'It reduces work pressure on the doctors and enables them to offer better quality care. Healthcare softwares help eliminate most of the paperwork by completely automating patient registration, form filling, record maintenance, file management, and data storage.',
    },
    {
      image: image2,
      title: 'Finance',
      text:
        'A custom software enables your employees to save a lot of time in doing things manually and can get required information instantly. Sales and Marketing reports, data can be accomplished within minutes. This saves time and you can utilize your workforce to do other higher-priority work.',
    },
    {
      image: image3,
      title: 'Retail',
      text:
        'Store owners/retailers can benefit from custom retail development software applications because it allows multiple services and streamlines the entire business in one place.The software helps you manage daily tasks such as customer checking, inventory managing and buying, and finance tracking.',
    }, {
      image: image4,
      title: 'Education',
      text:
        'Custom software helps institutions create educational software solutions that cater to their specific needs because each organization is different and requires a unique approach. ... Institutions will become more flexible and adapt much faster to uncertain times.',
    },
    {
      image: image5,
      title: 'Manufacturing',
      text:
        'But well-built customized software solutions can also bring profit more directly, by assisting in product quality assurance, speeding up production, and enhancing manufacturing productivity on all fronts. All this combined provides your business with a strong competitive advantage.',
    },
    {
      image: image6,
      title: 'Agriculture',
      text:
        'Get your info tests delivered at home collect a sample from the your pogress tests.',
    },
  ],
};
const SoftwareIndustries = () => {
  const { title, text, posts } = FEATURES_DATA;
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.sectionTitle}>
          <Text as="p">{text}</Text>
          <Heading as="h2">{title}</Heading>
        </Box>
        <Flex sx={styles.flex}>
          {posts.map(({ image, title, text }, index) => (
            <Box sx={styles.post} key={`feature-post-key-${index}`}>
              <Box className="image">
                <Image width="70" height="70" src={image} alt={title} />
              </Box>
              <Box sx={styles.postContent}>
                <Heading as="h3">{title}</Heading>
                <Text as="p">{text}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default SoftwareIndustries;

const styles = {
  section: {
    overflow: 'hidden',
    pt: ['70px', null, null, '70px'],
    pb: ['40px', null, null, '70px'],
    backgroundColor: '#F6F8FB',
  
  },
  container: {},
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    textAlign: 'center',
    mb: ['40px', null, null, '70px'],
    h2: {
      color: 'primary',
      fontWeight: 500,
      fontSize: ['22px', null, null, '30px'],
      lineHeight: 1,
      letterSpacing: '-0.5px',
      mt: '15px',
    },
    p: {
      color: 'primary',
      fontSize: '20px',
      lineHeight: 1.87,
    },
  },
  post: {
    mb: '30px',
    mx: ['0', null, null, null, null, '15px'],
    display: 'flex',
    flex: ['0 0 100%', null, null, '0 0 calc(33.333% - 30px)'],
    flexDirection: ['column', null, null, null, 'row'],
    justifyContent: ['center', null, 'flex-start'],
    textAlign: ['center', null, null, 'left'],
    '>.image': {
      flexShrink: 0,
      width: '70px',
      height: '70px',
      mx: ['auto', null, null, '0'],
    },
  },
  postContent: {
    ml: ['0', null, null, null, '30px'],
    mt: ['20px', null, null, null, '0'],
    h3: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: 1,
      color: 'heading',
      mb: '15px',
    },
    p: {
      color: 'heading',
      opacity:'.7',
      lineHeight: 1.87,
      fontSize: ['14px', null, null, '16px'],
      maxWidth: ['100%', '300px', null, '100%'],
      mx: [null, 'auto', null],
    },
  },
};
