/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
      sx={styles.logo}
    >
      <Image src={logo} sx={{ display: 'flex' }} alt="startup landing logo" />
    </Link>
  );
}

const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    width:[120, 170],
    

  },
};
