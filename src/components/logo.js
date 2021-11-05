/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/Group 6(3).png';

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
    width:['50%' ,'null','null' ,'null', '150px']
  }

}