import Aside from '../../components/layouts/Aside/Aside';
import AsideCollapseButton from '../../components/layouts/Aside/AsideCollapseButton';
import AsideHead from '../../components/layouts/Aside/AsideHead';
import Brand from '../../components/ui/Brand';
import AsideBody from '../../components/layouts/Aside/AsideBody';
import Nav from '../../components/layouts/Navigation/Nav';
import NavItem from '../../components/layouts/Navigation/NavItem';
import NavTitle from '../../components/layouts/Navigation/NavTitle';

const Navbar = () => {
  return (
    <Aside>
      <AsideHead>
        <Brand />
        <AsideCollapseButton />
      </AsideHead>
      <AsideBody>
        <Nav>
          <NavItem
            to="/"
            text="Sales Dashboard"
            icon="HiOutlineRectangleGroup"
          />
          <NavTitle>App</NavTitle>
        </Nav>
      </AsideBody>
    </Aside>
  );
};

export default Navbar;
