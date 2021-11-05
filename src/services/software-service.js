import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title'
import { FaAngleRight } from 'react-icons/fa';
import image1 from 'assets/boost-1-1.png';

const SoftwareService = () => {
  return (
    <Box sx={styles.boostAgencies}>
      <Container>
      <BlockTitle
          title="Types Of Custom Software We Deliver "
          styles={styles.blockTitle}
        />
    
        <Box sx={styles.row}>

        <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                Departmental Software
                </Heading>
                <Text as="p">
                We build software with features that are unmet by mass-market commercial or free software to cover the needs of a particular department within your organization.
               <br/> Examples:
                </Text>
              </Box>
              <Box as="ul" sx={styles.list}>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  CRM, inventory management
                  </Text>
                  <Text as="li">
                  <IoIosCheckmarkCircle />
                  financial management software, RIS, PACS.
                  </Text>
                  
              </Box>
              </Box>
          </Flex>

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                Customer Self-service Apps
                </Heading>
                <Text as="p">
                
                We build applications that help your organization deliver tailored customer experiences to win the market competition.
                <br/>
                Examples:
                </Text>
              </Box>
              <Box as="ul" sx={styles.list}>
              <Text as="li">
                  <IoIosCheckmarkCircle />
                  CRM, inventory management
                  </Text>
                  <Text as="li">
                  <IoIosCheckmarkCircle />
                  financial management software, RIS, PACS.
                  </Text>
                  
              </Box>
              </Box>
          </Flex>

         
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Corporate & Interorganizational  Software
                </Heading>
                <Text as="p">
                We build software that automates enterprise-wide processes and covers interdepartmental information flows, and may also include transactions with customers, vendors and partners.<br/>

               Examples:
                </Text>
              </Box>
              <Box as="ul" sx={styles.list}>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  RP, operations management software, SCM
                  </Text>
                  <Text as="li">
                  <IoIosCheckmarkCircle />
                  EAM, MES, POS, claims processing software, HCM/HRM.
                  </Text>
                  
              </Box>
              </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                Software for a Specific Business Function
                              </Heading>
                <Text as="p">
                We build software that fully covers business-unique and industry-specific functions, thus it doesn’t need time-consuming and complicated customization as is the case with market-available software products.
               <br/> Examples:
                </Text>
              </Box>
              <Box as="ul" sx={styles.list}>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  price management software
                  </Text>
                  <Text as="li">
                  <IoIosCheckmarkCircle />
                  clinical decision support app,billing sofware
                  </Text>
                  <Text as="li">
                  <IoIosCheckmarkCircle />
                  specialized accounting/treasury management software
                  </Text>
                  
              </Box>
              </Box>
          </Flex>

        
         
        </Box>
      </Container>
    </Box>
  );
};

export default SoftwareService;

const styles = {
  boostAgencies: {
    pt: ['1px', null, null, '80px', '120px', '2px', '2px'],
    backgroundColor: '#F6F8FB',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, 'row'],
  },
  col: {
    flex: ['0 0 100%', null, null, '0 0 50%'],
  },
  blockTitle:{
   textAlign:'center'
 },
  image: {
    mt: ['25px', null, null, '0'],
    display: 'flex',
    marginLeft: ['0', null, null, null, 'auto'],
    marginRight: ['0', null, null, null, 'auto'],
    height: ['385px', null, null, 'auto'],
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
      color: 'heading',
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
      fontSize: [0, null, 2, null, '16px'],
      color: 'heading',
      opacity: '.6',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      padding: ['0 20px', null, null, '0'],
      mt: ['15px'],
    },
  },
  link: {
    color: 'primary',
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
    pt: [null, null, null, null, null, '1px'],
    pl: [null, null, null, null, null, '60px', '140px'],
  },
};
