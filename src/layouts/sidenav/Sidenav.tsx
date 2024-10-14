import Aside from '../../components/layouts/Aside/Aside';
import AsideCollapseButton from '../../components/layouts/Aside/AsideCollapseButton';
import AsideHead from '../../components/layouts/Aside/AsideHead';
import Brand from '../../components/ui/Brand';
import AsideBody from '../../components/layouts/Aside/AsideBody';
import Nav from '../../components/layouts/Navigation/Nav';
import NavItem from '../../components/layouts/Navigation/NavItem';
import NavTitle from '../../components/layouts/Navigation/NavTitle';
import sideNavConfig from '../../config/sidenav.config';
import { TNavGroup } from '../../interfaces/navGroup.interface';
import Visible from '../../components/utils/Visible';
import useAsideCollapse from '../../hooks/useAsideCollapse';
import NavSeparator from '../../components/layouts/Navigation/NavSeparator';

const Sidenav = () => {
  const { collapsed } = useAsideCollapse();

  const render = (navGroups: TNavGroup[]) => {
    return navGroups.map((group) => {
      switch (group.type) {
        case 'title':
          return <NavTitle key={group.id}>{group.text}</NavTitle>;

        case 'separator':
          return <NavSeparator key={group.id} />;

        case 'item':
          return group.children ? (
            <NavItem {...group}>{render(group.children)}</NavItem>
          ) : (
            <NavItem {...group} children={null} />
          );
      }
    });
  };

  return (
    <Aside>
      <AsideHead>
        <Visible is={!collapsed}>
          <Brand />
        </Visible>
        <AsideCollapseButton />
      </AsideHead>
      <AsideBody>
        <Nav>{render(sideNavConfig)}</Nav>
      </AsideBody>
    </Aside>
  );
};

export default Sidenav;
