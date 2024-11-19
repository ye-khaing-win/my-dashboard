import Aside from '../../../components/layouts/Aside/Aside';
import AsideBody from '../../../components/layouts/Aside/AsideBody';
import AsideCollapseButton from '../../../components/layouts/Aside/AsideCollapseButton';
import AsideHead from '../../../components/layouts/Aside/AsideHead';
import Nav from '../../../components/layouts/Navigation/Nav';
import NavCollapse from '../../../components/layouts/Navigation/NavCollapse';
import NavItem from '../../../components/layouts/Navigation/NavItem';
import NavSeparator from '../../../components/layouts/Navigation/NavSeparator';
import NavTitle from '../../../components/layouts/Navigation/NavTitle';
import Brand from '../../../components/ui/Brand';
import Visible from '../../../components/utils/Visible';
import useAside from '../../../hooks/useAside';
import navGroups, { TNavGroup } from './config';

const DefaultAsideTemplate = () => {
  const { collapsed } = useAside();

  const render = (navGroups: TNavGroup[]) => {
    return navGroups.map((group) => {
      switch (group.type) {
        case 'title':
          return <NavTitle key={group.id}>{group.text}</NavTitle>;

        case 'separator':
          return <NavSeparator key={group.id} />;

        case 'collapse': {
          const { id, text, icon, children } = group;
          return (
            <NavCollapse key={id} icon={icon} text={text}>
              {children && render(children)}
            </NavCollapse>
          );
        }

        case 'item':
          return <NavItem {...group} children={null} />;
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
        <Nav>
          <ul>{render(navGroups)}</ul>
        </Nav>
      </AsideBody>
    </Aside>
  );
};

export default DefaultAsideTemplate;
