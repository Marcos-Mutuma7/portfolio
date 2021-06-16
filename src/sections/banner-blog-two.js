/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';

import blogImage from 'assets/blog-1.jpg'


export default function BannerBlogTwo() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Box sx={styles.image}>
            <Image src={blogImage} alt=""/>
          </Box>
          <br/>
          <Heading as="h1" >
            Getting started with Machine learning.
          </Heading>
          <br/>
          <Text as="p" >
          Today’s Artificial Intelligence (AI) has far surpassed the hype of blockchain and quantum computing. The developers now take advantage of this in creating new Machine Learning models and to re-train the existing models for better performance and results. This tutorial will give an introduction to machine learning and its implementation in Artificial Intelligence.
          </Text>
          <br/>
          <Heading as="h1" >
          Audience
          </Heading>
          <br/>
           <Text as="p" >
           This blog has been prepared for professionals aspiring to learn the complete picture of machine learning and artificial intelligence. This tutorial caters the learning needs of both the novice learners and experts, to help them understand the concepts and implementation of artificial intelligence.

             </Text>
           <br/>
           <Heading as="h1">
           Prerequisites
           </Heading>
           <br/>
           <Text as="p">
           The learners of this blog are expected to know the basics of Python programming. Besides, they need to have a solid understanding of computer programing and fundamentals.

If you are new to this arena, we suggest you pick up tutorials based on these concepts first, before you embark on with Machine Learning.
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

