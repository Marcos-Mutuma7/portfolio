import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'components/link';
import Image from 'components/image';
import BlockTitle from 'components/block-title'

import img1 from 'assets/image 48.png';

const DatabaseProcess = () => {
  return (
    <Box as="section" sx={styles.customerSupport}>
      <Container>
      <BlockTitle
          title="Our Data Analyst Consultation Process"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.row}>
        <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Data Science Consulting
              </Heading>
              <Text as="p">
              This initial stage involves a brief exploration of the topic with our data science team. We’ll explore the data, ask the big questions, and establish any goals for the project. We’ll also take the time to help you understand what opportunities exist and the pitfalls of machine learning implementation.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Data Analysis and Preparation
              </Heading>
              <Text as="p">
              Once we’ve laid the framework, our data engineers will carefully examine the data sets you’ve provided to ensure they choose the right one. They’ll clean the data and engage in feature engineering to prepare a dataset for the future model. We combine classic Agile principles with the CRISP-DM model for data mining and analysis. A typical cycle focuses on one hypothesis to ensure the precision of tasks and results.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Modeling and Training
              </Heading>
              <Text as="p">
              During this stage, the data science team will start to build and train models using prepared data to verify the hypothesis. The team will run several experiments to achieve a balance between accuracy and computer resource consumption. The goal of this stage is to get tangible results in the shortest period of time possible to prove the hypothesis.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Evaluation and Adjustments
              </Heading>
              <Text as="p">
              After we’ve proved the hypothesis through raw modeling, our data engineers will continue to adjust and optimize the selected model. This stage will improve the overall accuracy and lower the amount of power and time it consumes.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Integration and Deployment
              </Heading>
              <Text as="p">
              After verifying the model, we’ll deploy it on a test server where it can start to work with real data so we can monitor the results. If the model successfully achieves your business objectives in the test environment, we will deploy it in production.
              </Text>
            </Box>
          </Box>
          
          
         
        </Grid>
      </Container>
    </Box>
  );
};

export default DatabaseProcess;

const styles = {
  customerSupport: {
    overflow: 'hidden',
    pt: ['75px', null, null, null, '0', '80px'],
    pb: ['75px', null, null, null, null, '120px', '210px'],
    backgroundColor: '#F6F8FB',
  


  },
  row: {
    display: 'grid',
    gridGap: [0, null, null, null, '25px', null, '65px'],
    gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
  },
  blockTitle:{
    textAlign:'center'
  },
  col: {
    img: {
      maxWidth: ['100%', null, null, '60%', '100%', '100%'],
      mx: [null, null, null, 'auto', '0'],
      display: [null, null, null, 'block'],
      mt: [null, null, null, null, '0px', '-40px'],
      
    },
  },
  content: {
    pt: [0, null, null, null, '160px', '10px'],
    mb: [null, null, null, '-40px', '0'],
    position: 'relative',
    zIndex: 10,
    paddingLeft: ['12px', null, null, null, '0'],
    paddingRight: ['12px', null, null, null, '0', '75px', '0'],
    pb: ['10px'],
    maxWidth: [null, null, null, '590px', null, '100%'],
    width: ['100%'],
    mx: [null, null, null, 'auto', null, '0'],
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      fontSize: [5, null, '21px', null, 7, '32px', 8],
      maxWidth: [null, null, null, '400px', 'none'],
      mx: [null, null, null, 'auto', '0'],
      color: 'heading',
      fontWeight: 'bold',
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
      lineHeight: [1.5, null, 1.25],
      mb: ['30px', null, null, null, '10px'],
    },
    p: {
      fontSize: [0, null, 2, null, '16px'],
      color: 'heading',
      opacity:'.6',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      '+p': {
        mt: ['15px', null, null, null, '10px'],
      },
    },
  },
  specialText: {
    color: 'heading',
    opacity: 0.6,
  },
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    mt: ['10px', null, null, null, '10px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
};
