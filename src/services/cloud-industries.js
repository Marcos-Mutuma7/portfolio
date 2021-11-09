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
  title: 'Industries that we serve Cloud services',
  text: 'Cloud products for every business size',
  posts: [
   
    {
      image: image3,
      title: 'Education',
      text:
        ' Education constantly deals with tight funding situations, a problem that the cloud can directly alleviate. It’s important for schools to have access to the latest technology to provide the best education possible, and with RapidScale’s cloud, this can be done. Students can access the information they need all in one place. Teachers can distribute assignments with greater ease. ',
    },
    {
      image: image2,
      title: 'Finance',
      text:
        'A huge concern for the financial industry when it comes to the cloud is security, but our solution allows you to experience encrypted information, Tier 3, Class 1 data centers and limited access credentials for that confidential data. And with this tight security in place, financial businesses can explore the ease of completing everyday tasks like customer billing or interaction. ',
    },
    {
      image: image1,
      title: 'Healthcare',
      text:
        ' Our Cloud Healthcare solution ensures that it’s an easy transition, and a reliable one. Our solutions are compliant with various healthcare regulations. We also provide additional benefits that healthcare providers rarely consider. Doctors can more easily stay connected with their patients, as well as improve collaboration with each other.',
    }, {
      image: image4,
      title: 'Insurance',
      text:
        'Our cloud solutions allow you to connect with your clients in the most convenient way. When dealing with insurance sales, the cloud is the best resource because you can experience real-time collaboration. Communicate within channels and set up customer portals that will help you and your customers keep track of their accounts and statuses. ',
    },
    {
      image: image5,
      title: 'Production',
      text:
        'When it comes to manufacturing, companies are constantly challenged with the need to manage diverse locations and supply chains that require large, intricate database applications. RapidScale’s cloud allows these companies to connect anywhere and provides the necessary infrastructure to power each location.',
    },
    {
      image: image6,
      title: 'Real Estate',
      text:
        'It’s important to be constantly in-the-know if you work in the real estate industry. We make it easy for you to keep an eye on personal listings while being constantly aware of new ones. Whether you’re an agent, brokerage or title company, you will experience how easy it is to access information in the field when you need it. ',
    },
  ],
};
const CloudIndustries = () => {
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

export default CloudIndustries;

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
