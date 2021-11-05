import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title'
import { FaAngleRight } from 'react-icons/fa';
import image1 from 'assets/image 56.png';
import image2 from 'assets/image 57.png';


const BoostAgencies = () => {
  return (
    <Box sx={styles.boostAgencies}>
      <Container>
      <BlockTitle
      slogan="Why choose TechPulse?"
          title="Our Software Development Process"
          styles={styles.blockTitle}
        />
        <Box sx={styles.row}>

        <Flex sx={styles.col}>
            <Image src={image1} sx={styles.image} alt="" />
          </Flex>

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
              Analysis
                </Heading>
                <Text as="p">
                Software quality assurance (SQA) is a means and practice of monitoring the software engineering processes and methods used in a project to ensure 
                </Text>
              </Box>
              <Link path="/" sx={styles.link}>
                Learn more <FaAngleRight />
              </Link>
              </Box>
          </Flex>
         
          

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
              Design
                </Heading>
                <Text as="p">
                Software quality assurance (SQA) is a means and practice of monitoring the software engineering processes and methods used in a project to ensure
                </Text>
              </Box>
              <Link path="/" sx={styles.link}>
                Learn more <FaAngleRight />
              </Link>
              </Box>
          </Flex>
         
          <Flex sx={styles.col}>
            <Image src={image2} sx={styles.image} alt="" />
          </Flex>

         

        
        </Box>
      </Container>
    </Box>
  );
};

export default BoostAgencies;

const styles = {
  boostAgencies: {
    pt: ['70px', null, null, '80px', '120px', null, '130px'],
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: ['column-reverse', null, null,null, null, 'row'],
  },
  col: {
    flex: ['0 0 100%', null, null, '0 0 50%'],
    flexDirection: ['column-reverse', null, null, 'row'],
  },
  blockTitle:{
   textAlign:'center'
 },
  image: {
    mt: ['25px', null, null, '0'],
    display: 'flex',
    marginLeft: ['0', null, null, null, 'auto'],
    marginRight: ['0', null, null, null, 'auto'],
    height: ['auto', null, null, 'auto'],
    position: 'relative',
    top: [null, null, null, '-20px', '-45px', 'auto'],
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    ml: ['25px', null, null, '0'],
    mb: ['10px'],
    mt: ['30px'],
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-start', null, null, null, null, 'flex-start'],
      fontSize: [1, null, 2, null, '18px'],
      color: 'text_secondary',
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: '#DADADA',
        borderRadius: '50%',
        marginRight: ['10px'],
      },
    },
  },
  titleBox: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      lineHeight: [1.6, null, null, '1.5'],
      fontWeight: 'bold',
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
    },
    p: {
      fontSize: [0, null, 2, null, '17px'],
      color: 'heading',
      opacity: '.6',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      padding: ['0 20px', null, null, '0'],
      mt: ['15px'],
    },
  },
  link: {
    color: 'heading',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    pl: ['30px', null, null, '4px', null, '4px'],
    mt: ['5px', null, null, null, '10px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
  content: {
    width: '100%',
    textAlign: ['left', null, null, null, 'left'],
    pt: ['10px', null, null, null, null, '100px'],
    pl: [null, null, null, null, null, '60px', '140px'],
  },
};
