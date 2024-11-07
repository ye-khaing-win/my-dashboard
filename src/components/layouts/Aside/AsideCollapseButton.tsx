import classNames from 'classnames';
import useAside from '../../../hooks/useAside';
import HeroIcon from '../../icons/HeroIcon';

const AsideCollapseButton = () => {
  const { collapsed, onToggle } = useAside();

  return (
    <button
      data-component-name="Aside/AsideCollapseButton"
      type="button"
      onClick={onToggle}
      className={classNames('flex items-center justify-center', 'h-12 w-12')}
    >
      <HeroIcon
        icon={collapsed ? 'HiOutlineMenu' : 'HiOutlineMenuAlt2'}
        className="text-2xl"
      />
    </button>
  );
};

export default AsideCollapseButton;
