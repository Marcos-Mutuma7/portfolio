/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import privacy from 'assets/image 8.png';
import privacy3 from 'assets/image 9.png'
import privacy4 from 'assets/image 10.png'
import privacy1 from 'assets/image 7.png'
import privacy2 from 'assets/image 71.png'
import BlockTitle from 'components/block-title';


const BlockchainService = () => {
  return (
    <section sx={styles.section} id="features">
      

      <Container>
      <BlockTitle
          slogan="Blockchain Is Revolutionizing the World Right Now!"
          title="Our Blockchain Services"
          styles={styles.blockTitle}
        />
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy1} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Smart Contracts"
            description="A smart contract is an agreement between two people in the form of computer code. They run on the blockchain, so they are stored on a public database and cannot be changed. The transactions that happen in a smart contract are processed by the blockchain, which means they can be sent automatically without a third party."
            learnMore="Secure data storage"
          />
        </Box>

        
        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Non-fungible tokens (NFTs)"
            description="NFTs, or nonfungible tokens, are unique assets that can't be replaced with something else, and are verified and stored using blockchain technology. They can include everything from music to a website domain, but the current craze is really around digital artwork."
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
            title="Decentralized applications (dApps)"
            description="Running atop a blockchain, peer-to-peer (P2P) network that acts as a kind of operating system, dApps create an innovative open-source software ecosystem that is both secure and resilient. And it allows developers to create new online tools, many of which have piqued the interest of global business markets."
            learnMore="Secure data storage"
          />
        </Box>


        <Box sx={styles.grid_1}>
          
          <SectionHeading
            sx={styles.heading}
            title="Cryptocurrency consulting"
            description="We have Cryptocurrency consultant  professionals who guides clients towards successful, compliant cryptocurrency transactions and practices across accounting and tax functions. They protect their clients from illegal and unethical crypto practices."
            learnMore="Secure data storage"
          />

<Flex sx={styles.illustration}>
            <Image src={privacy4} alt="privacy" />
        
          </Flex>
        </Box>

        

       
      </Container>
    </section>
  );
};

export default BlockchainService;

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