
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';

import blogImage from 'assets/blog-3.jpg';
import aiImage from 'assets/Ai-pic.png';
import { IoIosCheckmarkCircle } from 'react-icons/io';


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
          This blog provides introductory knowledge on Artificial Intelligence. It would come to a great help if you are about to select Artificial Intelligence as a course subject. You can briefly know about the areas of AI in which research is prospering.
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
            <Image src={aiImage} alt=""/>
          </Box>
          <br/>
           <Heading as="h1">
           Applications of AI
           </Heading>
           <br/>
           <Text as="p">
           AI has been dominant in various fields such as :
           <Text as="li">
                  <IoIosCheckmarkCircle />
                  Gaming − AI plays crucial role in strategic games such as chess, poker, tic-tac-toe, etc., where machine can think of large number of possible positions based on heuristic knowledge.
                 </Text>
    
       <Text as="li">
  <IoIosCheckmarkCircle />
    Natural Language Processing − It is possible to interact with the computer that understands natural language spoken by humans.
   </Text>

   <Text as="li">
   <IoIosCheckmarkCircle/>

    Expert Systems − There are some applications which integrate machine, software, and special information to impart reasoning and advising. They provide explanation and advice to the users.
   
   </Text>

   <Text as="li">
     <IoIosCheckmarkCircle/>
    Vision Systems − These systems understand, interpret, and comprehend visual input on the computer. For example,

        A spying aeroplane takes photographs, which are used to figure out spatial information or map of the areas.

        Doctors use clinical expert system to diagnose the patient.

        Police use computer software that can recognize the face of criminal with the stored portrait made by forensic artist.
</Text>
   <Text as="li">
     <IoIosCheckmarkCircle/>
    Speech Recognition − Some intelligent systems are capable of hearing and comprehending the language in terms of sentences and their meanings while a human talks to it. It can handle different accents, slang words, noise in the background, change in human’s noise due to cold, etc.
  </Text>
  <Text as="li">
    <IoIosCheckmarkCircle/>
    Handwriting Recognition − The handwriting recognition software reads the text written on paper by a pen or on screen by a stylus. It can recognize the shapes of the letters and convert it into editable text.
</Text>
   <Text as="li">
     <IoIosCheckmarkCircle/>
    Intelligent Robots − Robots are able to perform the tasks given by a human. They have sensors to detect physical data from the real world such as light, heat, temperature, movement, sound, bump, and pressure. They have efficient processors, multiple sensors and huge memory, to exhibit intelligence. In addition, they are capable of learning from their mistakes and they can adapt to the new environment.
  </Text>
           </Text>
           <br/>
          <Text as="p">
          While studying artificially intelligence, you need to know what intelligence is. This section covers Idea of intelligence, types, and components of intelligence.
          </Text>
          <br/>
          <Heading as="h1">
           What is Intellengence?
           </Heading>
           <br/>
           <Text as="p">
           The ability of a system to calculate, reason, perceive relationships and analogies, learn from experience, store and retrieve information from memory, solve problems, comprehend complex ideas, use natural language fluently, classify, generalize, and adapt new situations.
             </Text>
          <br/>
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

