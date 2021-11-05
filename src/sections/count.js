
/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import StatItem from 'components/stat-item';

const data = {

stats: [
    {
      id: 1,
      value: 200,
      suffix: '+',
      title: 'Successful Projects',
    },
    {
      id: 2,
      value: 7,
      suffix: '+',
      title: 'Years Experience',
    },
    {
      id: 3,
      value: 110,
      suffix: '+',
      title: 'Remote Engineers',
    },
    
    
    ,{
      id: 4,
      value: 100,
      suffix: '%',
      title:'Client Satisfaction'
    },
    
  ],
}

function Count() {
    return (
    <Box sx={styles.section}>
        <Container>
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
        </Grid>
        </Container>
    </Box>
    )
}

export default Count


const styles = {
    section: {
        
        overflow: 'hidden',
        backgroundColor: '#F6F8FB',
      
      
    },
    serviceGrid: {
      backgroundColor: 'white',
      boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
      borderRadius: 10,
      gap: [2, null, null, '60px 40px', '50px 30px', '60px 40px'],
      justifyContent: 'center',
      gridTemplateColumns: [
        'repeat(1, 250px)',
        null,
        null,
        'repeat(2, 260px)',
        'repeat(3, 258px)',
        'repeat(3, 300px)',
      ],
      pt: [8, null, null, 16],
      pb: [8, null, null, 15],
    },
    statsGrid: {
      gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
      justifyContent: 'center',
      gridTemplateColumns: [
        'repeat(2, 120px)',
        null,
        null,
        'repeat(4, 130px)',
        'repeat(4, 150px)',
      ],
      mb: [2],
      mt:[5]
    },
  };
