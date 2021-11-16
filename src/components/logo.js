/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/image 66.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo} sx={{ display: 'flex' }} sx={styles.logo} alt="startup landing logo" />
    </Link>
  );
}
const styles ={
  logo :{
    width:['45px' ,'null','null' ,'null', '56px']
  }

}