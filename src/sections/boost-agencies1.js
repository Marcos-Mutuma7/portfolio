/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 59.png';
import privacy1 from 'assets/image 60.png'
import BlockTitle from 'components/block-title';


const BoostAgencies1 = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
     
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Spiral development"
            description="The spiral model is a systems development lifecycle (SDLC) method used for risk management that combines the iterative development process model with elements of the Waterfall model. The spiral model is favored for large, expensive and complicated projects."
            learnMore="Secure data storage"
          />
        </Box>

        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Rapid application"
            description="RAD is especially well suited for (although not limited to) developing software that is driven by user interface requirements. Graphical user interface builders are often called rapid application development tools."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
        
          </Flex>

         
          
       

        </Box>
      </Container>
    </section>
  );
};

export default BoostAgencies1;

const styles = {
  section: {
    pt: [0, null, null, null, 10, 10],
    pb: [6, null, null, 8, 10, 11],
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