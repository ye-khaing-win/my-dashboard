import classNames from 'classnames';
import useTheme from '../../../hooks/useTheme';
import Icon from '../../icons/Icon';

const AsideCollapseButton = () => {
  const { asideCollapsed, setAsideCollapsed } = useTheme();

  return (
    <button
      data-component-name="Aside/AsideCollapseButton"
      type="button"
      onClick={() => setAsideCollapsed(!asideCollapsed)}
      className={classNames('flex items-center justify-center', 'h-12 w-12')}
    >
      <Icon
        icon={asideCollapsed ? 'HiOutlineMenu' : 'HiOutlineMenuAlt2'}
        className="text-2xl"
      />
    </button>
  );
};

export default AsideCollapseButton;
