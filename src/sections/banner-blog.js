
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';

import blogImage from 'assets/blog-3.jpg'


export default function BannerBlog() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Box sx={styles.image}>
            <Image src={blogImage} alt=""/>
          </Box>
          <br/>
          <Heading as="h1" >
            An overview on Artificial Intellengence.
          </Heading>
          <br/>
          <Text as="p" >
          This tutorial provides introductory knowledge on Artificial Intelligence. It would come to a great help if you are about to select Artificial Intelligence as a course subject. You can briefly know about the areas of AI in which research is prospering.
          </Text>
          <br/>
          <Heading as="h1" >
          Audience
          </Heading>
          <br/>
           <Text as="p" >
           This blog is prepared for the students at beginner level who aspire to learn Artificial Intelligence. 
           </Text>
           <br/>
           <Heading as="h1">
           Prerequisites
           </Heading>
           <br/>
           <Text as="p">
           The basic knowledge of Computer Science is mandatory. The knowledge of Mathematics, Languages, Science, Mechanical or Electrical engineering is a plus.
           </Text>
           <br/>
          <Heading as="h1" >
          What is Artificial Intellengence?
          </Heading>
          <br/>
           <Text as="p" >
           According to the father of Artificial Intelligence, John McCarthy, it is “The science and engineering of making intelligent machines, especially intelligent computer programs”.
Artificial Intelligence is a way of making a computer, a computer-controlled robot, or a software think intelligently, in the similar manner the intelligent humans think.
AI is accomplished by studying how human brain thinks, and how humans learn, decide, and work while trying to solve a problem, and then using the outcomes of this study as a basis of developing intelligent software and systems.
           </Text>
           <br/>
           <Heading as="h1">
           What Contributes to AI?
           </Heading>
           <br/>
           <Text as="p">
           Artificial intelligence is a science and technology based on disciplines such as Computer Science, Biology, Psychology, Linguistics, Mathematics, and Engineering. A major thrust of AI is in the development of computer functions associated with human intelligence, such as reasoning, learning, and problem solving.
           Out of the following areas, one or multiple areas can contribute to build an intelligent system.
           </Text>
           <br/>
           <Box sx={styles.image}>
            <Image src={blogImage} alt=""/>
          </Box>
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

