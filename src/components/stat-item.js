/** @jsx jsx */
import { rgba } from 'polished';
import CountUp from 'react-countup';
import { jsx, Box, Text } from 'theme-ui';

const StatItem = ({ stat, isVisible }) => {
  return (
    <Box sx={styles.item}>
      <Text sx={styles.value}>
        {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
      </Text>
      <Text as="p" sx={styles.title}>
        {stat.title}
      </Text>
    </Box>
  );
};

export default StatItem;

const styles = {
  item: {
    textAlign: 'center',
    boXShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    backgroundColor:'white',
    borderRadius:'15px',
    padding:'20px' ,
    margin:'-5px',
    transition: '500ms',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
      transform: 'scale(0.95)'
    },
  },
  value: {
    color: 'primary',
    fontSize: ['30px', null, null, null, null, '52px'],
    display: 'flex',
    justifyContent: 'center',
    lineHeight: 1.38,
    letterSpacing: ['-0.5px', null, null, '-1px'],
  },
  title: {
    fontSize: [1, null, null, '15px', 17],
    lineHeight: 1.77,
    color: rgba('#0F2137', 0.6),
    mt: [1],
  },
};
