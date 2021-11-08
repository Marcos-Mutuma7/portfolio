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
  title: 'Industries we provide with Data services',
  text: 'Big data , biggger problems',
  posts: [
   
    {
      image: image3,
      title: 'Retail',
      text:
        'Big Data analytics in retail sector is enabling companies to create customer recommendations based on their purchase history thereby resulting in personalized shopping experiences and improved customer service.',
    },
    {
      image: image2,
      title: 'Finance',
      text:
        ' Data Science has become very important in the Finance Industry, which is mostly used for Better Risk Management and Risk Analysis. Better analysis leads to better decisions which lead to an increase in profit for financial institutions.',
    },
    {
      image: image1,
      title: 'Healthcare',
      text:
        'In healthcare, big data uses specific statistics from a population or an individual to research new advancements, reduce costs, and even cure or prevent the onset of diseases.',
    }, {
      image: image4,
      title: 'Real estate',
      text:
        'In the world of real estate, a growing number of deals rely on data analysis. From faster, more accurate appraisals to sophisticated forecasts, the use of analytics can lead to smarter decisions about property investments.',
    },
    {
      image: image5,
      title: 'Media & entertainment',
      text:
        'Data and analytics is helping entertainment and media companies unlock hidden insights in their data – from social media listening to predictive models to test advertising, pricing and sales forecasting.',
    },
    {
      image: image6,
      title: 'Agriculture',
      text:
        'Big data provides farmers granular data on rainfall patterns, water cycles, fertilizer requirements, and more. This enables them to make smart decisions, such as what crops to plant for better profitability and when to harvest',
    },
  ],
};
const Features = () => {
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

export default Features;

const styles = {
  section: {
    overflow: 'hidden',
    pt: ['70px', null, null, '10px'],
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
      width: '80px',
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
