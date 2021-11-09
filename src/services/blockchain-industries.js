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
  title: 'Industries we provide Blockchain services',
  text: 'The Future of Marketplaces Is Decentralized',
  posts: [
   
    {
      image: image3,
      title: 'Finance',
      text:
        ' Blockchain offers better capital optimisation, due to a, significant, reduction in operational costs for banks. In addition, when banks share a Blockchain, the total costs of that Blockchain and the surrounding ecosystem might be higher than individual costs of managing transactions at a bank.',
    },
    {
      image: image2,
      title: 'Government',
      text:
        'Blockchain can serve a unique role in preventing government corruption. Its technology offers a singular combination of permanent and tamper-evident record keeping, real-time transaction transparency and auditability, and automated smart contract functionality.',
    },
    {
      image: image1,
      title: 'Healthcare',
      text:
        'The benefits of using blockchains, relative to traditional methods of healthcare database management systems, include decentralized management, unchangeable databases, data provenance, traceable data, robust data, availability of data to any authorized user.',
    }, {
      image: image4,
      title: 'Insurance',
      text:
        'Cost savings is a major benefit that blockchain can provide. ... Blockchain has the ability to help automate claims functions by verifying coverage between companies and reinsurers. It will also automate payments between parties for claims and thus lower administrative costs for insurance companies.',
    },
    {
      image: image5,
      title: 'Retail',
      text:
        'Blockchain applications in a retail environment will deliver 4 main benefits; Reduced Costs, Faster Payments, Increased Transparency and Improved Security. These will be achieved through several core technologies, working in tandem and/or alongside each other.',
    },
    {
      image: image6,
      title: 'Media & Entertainment',
      text:
        'Blockchain in media and entertainment is allowing for disintermediation, streamlined royalty payments, micropayments and usage-based payments, all while placing the power back in the hands of content creators and providing a more customer-centric approach.',
    },
  ],
};
const BlockchainIndustries = () => {
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

export default BlockchainIndustries;

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
