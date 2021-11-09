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


const MachineService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Addressing world problems through Artificial Intelligence."
          title="TechPulse Artificial Intellengence Services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Ai for customer experience"
            description="Chatbots, for example, use both machine learning algorithms and NLP to understand customer requests and respond appropriately. And they do that faster than human workers can and at lower costs.

            AI also powers recommendation functions, which use customer data and predictive analytics to suggest products that customers are most likely to need or want and therefore buy."
            learnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Ai for targeted marketing"
            description="Online search providers, online retailers and other internet entities use intelligent systems to understand users and their buying patterns, so they can select advertisements for the specific products that they're most likely to want or need."
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
            title="Smart supply chains"
            description="Organizations across industries are using AI to improve management of their supply chains. They're using machine learning algorithms to forecast what will be needed when as well as the optimal time to move supplies.

            In this use case, AI helps business leaders create more efficient, cost-effective supply chains by minimizing and even possibly eliminating overstocking and the risk of running short on in-demand products."
            learnMore="Secure data storage"
          />
        </Box>


        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Smarter operations"
            description="Meanwhile, retailers are using AI for intelligent store design, optimized product selection and in-store activities monitoring. Some are using AI to monitor inventory on shelves in various ways, including for the freshness of perishable goods.

            AI is also impacting IT operations. For example, some intelligence software applications identify anomalies that indicate hacking activities and ransomware attacks, while other AI-infused solutions offer self-healing capabilities for infrastructure problems."
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
            title="Ai for Optimization"
            description="Optimization is another use case for AI that stretches across industries and business functions. AI-based business applications can use algorithms and modeling to turn data into actionable insights on how organizations can optimize a range of functions and business processes -- from worker schedules to production product pricing."
            learnMore="Secure data storage"
          />
        </Box>

       
      </Container>
    </section>
  );
};

export default MachineService;

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