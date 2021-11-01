import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title'
import { FaAngleRight } from 'react-icons/fa';
import image1 from 'assets/boost-1-1.png';

const DatabaseService = () => {
  return (
    <Box sx={styles.boostAgencies}>
      <Container>
      <BlockTitle
          title="Our Data Analytics Services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Digital Analytics
                </Heading>
                <Text as="p">
                It is the process of analyzing digital data from various sources like mobile applications or websites. We provide digital analytics services to our clients to help them examine their customers’ behavior and translate it into actionable business data.
                </Text>
              </Box>
              </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                 Advanced Analytics
                </Heading>
                <Text as="p">
                To help businesses make better decisions, we provide advanced analytics services. Advanced Analytics provides new insights into the data and uses data mining, data visualization, pattern matching, & predictive modeling tools to produce analyses.
                </Text>
              </Box>
              </Box>
          </Flex>

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Data Visualization
                </Heading>
                <Text as="p">
                The process of collecting data and placing it into a visual context is a data visualization. Data visualization makes it easier to detect patterns and trends of the customers. With the help of our data visualization service, our customers can quickly understand complex patterns in data sets.
                </Text>
              </Box>
              </Box>
          </Flex>

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Data Quality Assurance
                </Heading>
                <Text as="p">
                We provide data quality assurance to help our customers keep them safe from calamitous effects that low-quality data can cause. Our team develops and implements data governance procedures to optimize data quality assurance.
                </Text>
              </Box>
              </Box>
          </Flex>

          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Business Intellegence
                </Heading>
                <Text as="p">
                At Optimus, We help our clients to optimize their capabilities to leverage various types of data. Our business intelligence services include development and consulting, data visualization, and testing.
                </Text>
              </Box>
              </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Data Services
                </Heading>
                <Text as="p">
                We help you to establish your data warehouse, examine complex data reports, and extract value from abundant data for making smart business decisions.
                </Text>
              </Box>
              </Box>
          </Flex>

        </Box>
      </Container>
    </Box>
  );
};

export default DatabaseService;

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
