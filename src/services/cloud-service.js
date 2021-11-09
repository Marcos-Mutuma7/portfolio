/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 4.png';
import privacy3 from 'assets/image 72.png'
import privacy4 from 'assets/image 73.png'
import privacy1 from 'assets/image 3.png'
import privacy2 from 'assets/image 5.png'
import BlockTitle from 'components/block-title';


const CloudService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Cloud computing for a better world"
          title="Our Cloud Consultancy Services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Infrastarcture as a Service(IaaS)"
            description="Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential compute, storage and networking resources on demand, on a pay-as-you-go basis. They also help you quickly provision new applications and increase the reliability of your underlying infrastructure.Examples: AWS, VMware"
      LearnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Platform as a Service(PaaS)"
            description="Platform as a service (PaaS) is a cloud computing model where a third-party provider delivers hardware and software tools to users over the internet. ... As a result, PaaS frees developers from having to install in-house hardware and software to develop or run a new application.Examples: Office 365, Google Drive"
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
            title="Service as a Service (SaaS)"
            description="Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management."
      LearnMore="Secure data storage"
          />
        </Box>
        


        

        
       
      </Container>
    </section>
  );
};

export default CloudService;

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