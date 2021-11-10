/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 22.png';
import privacy3 from 'assets/image 23.png'
import privacy4 from 'assets/image 24.png'
import privacy1 from 'assets/image 21.png'
import privacy2 from 'assets/image 26.png'
import BlockTitle from 'components/block-title';


const DatabaseService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Bring your idea to life and get set up for success!"
          title=" App & Web development services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Product Research"
            description="Research is of utmost importance in every stage of mobile app development. Getting relevant details and taking care of what the user needs would aid in the development of an app that is useful, unique, and popular with the masses. "
            learnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="UI design"
            description="Simply put, a good User Interface is important because it can turn potential visitors to buyers as it facilitates interactions between the user and your website or web application. ... UI design helps improve conversion rate on a website. An interface is a point where a users interact with the website they're using."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
        
          </Flex>
        </Box>

        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy3} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="User Exprience (UX)"
            description="Good user experience is clearly good for business. Studies show that companies that invest in UX see a lower cost of customer acquisition, lower support cost, increased customer retention and increased market share, according to a study done by Forrester."
            learnMore="Secure data storage"
          />
        </Box>


        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Wordpress"
            description="WordPress is a content management system (CMS) that allows you to host and build websites. WordPress contains plugin architecture and a template system, so you can customize any website to fit your business, blog, portfolio, or online store."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy4} alt="privacy" />
        
          </Flex>
        </Box>

        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy2} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Maintainance"
            description="Application development and maintenance enable organizations to manage all aspects of the software product development from start to finish – from the design, and coding, to testing, ongoing improvements, and debugging of software – in an effective manner."
            learnMore="Secure data storage"
          />
        </Box>

       
      </Container>
    </section>
  );
};

export default DatabaseService;

const styles = {
  section: {
    pt: [2, null, null, null, 1, 1],
    pb: [0, null, null, 14, 15, 15],
    
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