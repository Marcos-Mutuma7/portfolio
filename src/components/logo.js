/** @jsx jsx */
import { jsx ,Image ,Heading} from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.png';


export default function Logo(props) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Heading  as="h1" sx={{
        fontSize:"2rem",
        fontFamily:'special',
        color:'purple',
        fontWeight:'heading',

      }}>
      Macc
      </Heading>
    </Link>
  );
}
