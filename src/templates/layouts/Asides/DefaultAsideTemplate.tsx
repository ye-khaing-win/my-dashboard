import Aside from '../../../components/layouts/Aside/Aside';
import AsideCollapse from '../../../components/layouts/Aside/AsideCollapse';
import AsideHead from '../../../components/layouts/Aside/AsideHead';
import Logo from '../../../components/ui/Logo';

const DefaultAsideTemplate = () => {
  return (
    <Aside>
      <AsideHead>
        <Logo />
        <AsideCollapse />
      </AsideHead>
    </Aside>
  );
};

export default DefaultAsideTemplate;
