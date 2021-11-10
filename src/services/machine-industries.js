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
  title: 'Industries we provide Ai services',
  text: 'Let’s design the future of AI together ☝️🎁',
  posts: [
   
    {
      image: image3,
      title: 'Finance',
      text:
        'Artificial intelligence in finance is transforming the way we interact with money. AI is helping the financial industry to streamline and optimize processes ranging from credit decisions to quantitative trading and financial risk management.',
    },
    {
      image: image2,
      title: 'Advertising',
      text:
        'AI enables marketers to personalize their communications on an individual level rather than the generic target groups that marketers relied on in the past. This technology works by predicting customer behavior based on intelligence learned from previous brand interactions.',
    },
    {
      image: image1,
      title: 'Healthcare',
      text:
        'Integrating AI into the healthcare ecosystem allows for a multitude of benefits, including automating tasks and analyzing big patient data sets to deliver better healthcare faster, and at a lower cost.AI has the ability to analyze big data sets – pulling together patient insights and leading to predictive analysis.',
    }, {
      image: image4,
      title: 'Real estate',
      text:
        'AI can also help if you adopt a purchase and hold strategy and regularly manage asset management obligations. Just as an intelligent CRM system can help property agents manage their transactions and reduce the number of errors, it can also help with asset management and investment.',
    },
    {
      image: image5,
      title: 'Logistics',
      text:
        'AI-powered supply chain management enables businesses to accurately predict demand spikes and adjust the routes and volumes of material flows. For instance, AI can be used to gather comprehensive data (weather patterns, GPS information and reroutes) that may affect delivery times'
    },
    {
      image: image6,
      title: 'Food tech',
      text:
        'AI in the food industry is also capable of creating accurate forecasts to manage inventory and pricing. This kind of predictive analysis helps keep food businesses one step ahead, enabling them to avoid wastage and unnecessary costs.',
    },
  ],
};
const MachineIndustries = () => {
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

export default MachineIndustries;

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
