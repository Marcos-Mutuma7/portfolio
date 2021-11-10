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
  title: 'Industries we provide our services',
  text: 'We use tech to create, connect, and grow',
  posts: [
   
    {
      image: image3,
      title: 'Education',
      text:
        'The social nature of Web applications have the potential to empower education. These applications provide a learning environment in which students can construct their learning, collaborate with others, generate ideas, edit and distribute their material, and more.',
    },
    {
      image: image2,
      title: 'Tourism',
      text:
        'Internet helps the tourism industry to expand and transfer its data which helps the industry to increase the turnover ratio and internet is the most suitable way to make direct relationship with customers. In the modern world travel agencies can use internet as a profitable medium of tourism promotion and sales.',
    },
    {
      image: image1,
      title: 'Healthcare',
      text:
        'Reliable online medical sources provide general, easily understandable information about symptoms, treatment options, and common outcomes. When used properly, your online research can help you proactively identify a health problem, treat it over-the-counter, and empower you to make good health-related decisions.',
    }, {
      image: image4,
      title: 'Manufacturing',
      text:
        'Manufacturing software systems make it easier for manufacturers to eliminate non-value added processes, remove unplanned downtimes, prevent bottlenecks in the production process, optimize scheduling and resource allocation regardless of the plant location, have complete visibility of the entire manufacturing process',
    },
    {
      image: image5,
      title: 'Finance',
      text:
        'The impact of information technology on financial services also allows customers to be able to easily complete online transactions, which creates a better convince in finance, allowing for the development of information technology and initially create a more fast and efficient service',
    },
    {
      image: image6,
      title: 'Agriculture',
      text:
        'se of ICT in agriculture is mainly to disseminate agriculture related information to the farmers and to trade their produce in India. Information is broadcasting online or offline. Internet is a major media for information flow. The ICT initiatives in India are based chiefly to disseminate information',
    },
  ],
};
const DatabaseIndustries = () => {
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

export default DatabaseIndustries;

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
      fontSize: '18px',
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
