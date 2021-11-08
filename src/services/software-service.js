/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 69.png';
import privacy3 from 'assets/image 72.png'
import privacy4 from 'assets/image 73.png'
import privacy1 from 'assets/image 68.png'
import privacy2 from 'assets/image 71.png'
import BlockTitle from 'components/block-title';


const SoftwareService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Leading the new digital"
          title="Our Customized Software Examples"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Customer Relationship System (CRM)"
            description="Customer Relationship Management (CRM) is a strategy that companies use to manage interactions with customers and potential customers. CRM helps organisations streamline processes, build customer relationships, increase sales, improve customer service, and increase profitability."
            learnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Content Management System (CMS)"
            description="A content management system (CMS) is a computer software used to manage the creation and modification of digital content (content management). A CMS is typically used for enterprise content management (ECM) and web content management (WCM).It makes a website easily updatable as it's a way to edit your content without having any coding knowledge."
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
            title="Automated Invoicing Software"
            description="Automated invoicing is the process of scheduling invoices, in advance, to be issued automatically at a specified date and time. Online invoicing packages enable business owners to set this up. Alternatively, one-off invoices can easily be manually issued without the need for a bookkeeper, even from mobile devices."
            learnMore="Secure data storage"
          />
        </Box>


        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Remote Dashboard"
            description="Dashboard software is an information management tool that tracks, gathers, and displays business data in interactive and customizable visualizations that enable users to monitor the health of a business, analyze processes, and provide them with actionable insights."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
        
          </Flex>
        </Box>

        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy4} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Operations managements sofwares"
            description="Operational software is computer software designed to improve and streamline the regular operations of a business.Examples of operational software include: Accounting and inventory management automation. Product fulfillment. Customer resource management (CRM) and sales applications."
            learnMore="Secure data storage"
          />
        </Box>

       
      </Container>
    </section>
  );
};

export default SoftwareService;

const styles = {
  section: {
    pt: [2, null, null, null, 1, 1],
    pb: [0, null, null, 8, 10, 11],
    
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