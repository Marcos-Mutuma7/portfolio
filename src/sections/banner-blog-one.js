/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';

import blogImage from 'assets/blog-3.jpg'


export default function BannerBlogOne() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Box sx={styles.image}>
            <Image src={blogImage} alt=""/>
          </Box>
          <Heading as="h1" >
            Getting started with Machine learning.
          </Heading>
          <br/>
          <Text as="p" >
          Machine Learning (ML) is basically that field of computer science with the help of which computer systems can provide sense to data in much the same way as human beings do. In simple words, ML is a type of artificial intelligence that extract patterns out of raw data by using an algorithm or method. 
          The key focus of ML is to allow computer systems to learn from experience without being explicitly programmed or human intervention.
          </Text>
          <br/>
          <Heading as="h1" >
          Audience
          </Heading>
          <br/>
           <Text as="p" >
           This blog will be useful for graduates, postgraduates, and research students who either have an interest in this subject or have this subject as a part of their curriculum. The reader can be a beginner or an advanced learner. This blog has been prepared for the students as well as professionals to ramp up quickly. This blog is a stepping stone to your Machine Learning journey.
           </Text>
           <Heading as="h1">
           Prerequisites
           </Heading>
           <Text as="p">
           The reader must have basic knowledge of artificial intelligence. He/she should also be aware of Python, NumPy, Scikit-learn, Scipy, Matplotlib. If you are new to any of these concepts, we recommend you to take up tutorials concerning these topics, before you dig further into this tutorial.
           </Text>
        </Box>

      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    h1:{
      fontSize: [6, null, null, '36px', null, '49px', 9],
    },
    p:{
      fontSize: [1, null, null, 2, null, 3],
      fontFamily:'special',
      lineHeight: ['26px', null, null, null, 2.33],

    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};

