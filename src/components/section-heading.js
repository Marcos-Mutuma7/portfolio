/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

const SectionHeading = ({ slogan, title, description, ...props }) => {
  return (
    <Box sx={styles.headingWrapper} {...props}>
      
      
      
      <Heading sx={styles.title}>{title}</Heading>
      {description && (
        <Text sx={styles.description} as="p">
          {description}
        </Text>
      )}
      {slogan && (
        <Text sx={styles.slogan} as="p">
          {slogan}
        </Text>
        
      )}
    </Box>
  );
};

export default SectionHeading;

const styles = {
  headingWrapper: {
    maxWidth: 584,
    margin: '0 auto 60px',
    textAlign: 'center',
  },
  slogan: {
    color:'heading',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 2.22,
    mb: ['4px'],
  },
  title: {
    fontSize: [23, , , 35],
    fontWeight: [500, 400],
    lineHeight: 1.68,
    letterSpacing: 'heading',
  
  },
  description: {
    fontSize: 16,
    lineHeight: 2.07,
    color: 'heading',
    opacity:[.6],
  },
};
