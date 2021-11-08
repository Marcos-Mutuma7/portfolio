import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'components/link';
import Image from 'components/image';
import BlockTitle from 'components/block-title'

import img1 from 'assets/image 48.png';

const SoftwareProcess = () => {
  return (
    <Box as="section" sx={styles.customerSupport}>
      <Container>
      <BlockTitle
          slogan="Software with new dimensions"
          title="Why is Custom Software Development Important?"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.row}>
        <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Scalability
              </Heading>
              <Text as="p">
              Custom software can grow as an organization or business grows and changes. Designers and developers can assess future needs as part of their requirements gathering. These factors can then be incorporated into the application, rather than incurring costs by purchasing additional licenses or subscriptions of packaged applications.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Efficiency
              </Heading>
              <Text as="p">
              Custom software is purpose-built to support processes swiftly and productively, without the need to tinker with or adjust COTS applications.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Profitablity
              </Heading>
              <Text as="p">
              It’s possible to make money with custom software development. Depending on the terms and conditions of the project, businesses that develop their own software may own the software and therefore be able to license or sell it to other organizations.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Lower Intergration Costs
              </Heading>
              <Text as="p">
              One of the chief considerations of commercial software is: will it work with existing and legacy applications? If the answer is no, organizations face a further investment in getting commercial software to communicate and operate with their existing infrastructure. Custom software can be built to integrate with its intended environment.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Independence
              </Heading>
              <Text as="p">
              The benefits of being free of a commercial software vendor cut both ways. On the plus side, organizations can avoid price hikes for licensing and support — and getting stuck maintaining packaged software should the vendor go out of business or terminate a product.On the negative side, the cost of supporting and maintaining custom software falls to the organization that created it or had it developed. How the equation works out requires each organization to look carefully at whether it’s better to build or buy.
              </Text>
            </Box>
          </Box>
          
          
         
        </Grid>
      </Container>
    </Box>
  );
};

export default SoftwareProcess;

const styles = {
  customerSupport: {
    overflow: 'hidden',
    pt: ['75px', null, null, null, '80px', '80px'],
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
