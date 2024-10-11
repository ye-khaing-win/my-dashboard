import classNames from 'classnames';
import useTheme from '../../../hooks/useTheme';

const AsideCollapse = () => {
  const { asideCollapsed, setAsideCollapsed } = useTheme();

  return (
    <button
      data-component-name="AsideCollapse"
      type="button"
      onClick={() => setAsideCollapsed(!asideCollapsed)}
      className={classNames('flex items-center justify-center', 'h-12 w-12')}
    >
      {asideCollapsed ? 'C' : 'NC'}
    </button>
  );
};

export default AsideCollapse;
