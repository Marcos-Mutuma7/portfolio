/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 65.png';

import privacy1 from 'assets/image 64.png'
import privacy2 from 'assets/image 67.png'
import BlockTitle from 'components/block-title';


const DataService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Data Analytics is the future"
          title="Our Data Analytics Services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Data Analysis"
            description="Data analysis services allow businesses to get their data collected, processed and presented to them in the form of actionable insights while avoiding investments in the development and administration of an analytics solution.With experiencenced data scientists, TechPulse is a reliable outsourcing partner for companies that want to gain quick, frequent and flexible analytical insights out of their data."
            learnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Data Management"
            description="Data management services are aimed at ingesting, storing, organizing and using data, which was created and collected by a company, securely and efficiently.TechPulse helps companies establish a well-tuned data management process to get reliable reporting based on high-quality data."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
        
          </Flex>
        </Box>

        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy2} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Business Intellengence"
            description="Business Intelligence refers to the tools that empower IT staff but also business managers and executives to collect, manage, and analyze data in order to make informed decisions. Business intelligence can also involve basic mathematical concepts' understanding too."
            learnMore="Secure data storage"
          />
        </Box>

       
      </Container>
    </section>
  );
};

export default DataService;

const styles = {
  section: {
    pt: [2, null, null, null, 1, 1],
    pb: [0, null, null, 8, 10, 11],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',
  },
  blockTitle:{
textAlign:'center'
  },

  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  grid_1: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column', null, null, 'unset'],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    backgroundColor:'white',
    borderRadius:'15px',
    padding:'30px' ,
    transition: '500ms',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
      transform: 'scale(0.95)'
    },
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
      color:'heading'
    },
  },
  illustration: {
    alignItems: 'center',
    mt: [0, null, 0],
  },
  
};