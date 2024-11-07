import classNames from 'classnames';
import useAsideCollapse from '../../../hooks/useAsideCollapse';
import Icon from '../../icons/Icon';

const AsideCollapseButton = () => {
  const { collapsed, onToggle } = useAsideCollapse();

  return (
    <button
      data-component-name="Aside/AsideCollapseButton"
      type="button"
      onClick={onToggle}
      className={classNames('flex items-center justify-center', 'h-12 w-12')}
    >
      <Icon
        collection="hi"
        name={collapsed ? 'HiOutlineMenu' : 'HiOutlineMenuAlt2'}
        className="text-2xl"
      />
    </button>
  );
};

export default AsideCollapseButton;
