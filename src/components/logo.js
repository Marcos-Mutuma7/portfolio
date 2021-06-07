/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Heading as="h1" sx={{
        display :'flex',
        color : 'black',
        ml : '0rem',
        fontSize:'2rem',
        fontFamily:'',
        fontWeight:'500',
                           
    }}>Macc   
      </Heading>
    </Link>
  );
}
