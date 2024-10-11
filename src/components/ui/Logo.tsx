import Visible from '../utils/Visible';
import { Link } from 'react-router-dom';
import LogoTemplate from '../../templates/layouts/Logo/LogoTemplate';

const Logo = () => {
  return (
    <Visible is>
      <Link to="/" aria-label="Logo">
        <LogoTemplate className="h-12" />
      </Link>
    </Visible>
  );
};

export default Logo;
