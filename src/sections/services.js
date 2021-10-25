/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/service.png';

const Services = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            sx={styles.heading}
            sx={styles.heading}
            sx={styles.heading}
            learnMore="Secure data storage"
          />
        </Box>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    pt: [6, null, null, null, 0, 0],
    pb: [6, null, null, 0, 0, 0],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 1, 1],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    
    h3: {
      fontSize: [3, null, null, 8, 8],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
    mt: [8, null, 10],
     maxWidth: ['100%', null, null, '60%', '100%', 'none'],
  
  },
};