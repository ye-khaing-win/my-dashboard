import Aside from '../../../components/layouts/Aside/Aside';
import AsideCollapse from '../../../components/layouts/Aside/AsideCollapse';
import AsideHead from '../../../components/layouts/Aside/AsideHead';
import Logo from '../../../components/ui/Logo';
import AsideBody from '../../../components/layouts/Aside/AsideBody';

const DefaultAsideTemplate = () => {
  return (
    <Aside>
      <AsideHead>
        <Logo />
        <AsideCollapse />
      </AsideHead>
      <AsideBody>
        <div></div>
      </AsideBody>
    </Aside>
  );
};

export default DefaultAsideTemplate;
