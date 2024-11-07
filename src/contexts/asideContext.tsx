import { createContext, FC, ReactNode, useState } from 'react';

interface IAsideContextProps {
  collapsed: boolean;
  clicked: boolean;
  hovered: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface IAsideCollapse {
  clicked: boolean;
  hovered: boolean;
}

interface IAsideCollapseProviderProps {
  children: ReactNode;
}

const AsideContext = createContext<IAsideContextProps>(
  {} as IAsideContextProps,
);

export const AsideProvider: FC<IAsideCollapseProviderProps> = (props) => {
  const { children } = props;

  const [collapse, setCollapse] = useState<IAsideCollapse>({
    clicked: false,
    hovered: false,
  });

  const handleToggle = () => {
    setCollapse({ ...collapse, clicked: !collapse.clicked });
  };

  const handleMouseEnter = () => {
    setCollapse({ ...collapse, hovered: true });
  };

  const handleMouseLeave = () => {
    setCollapse({ ...collapse, hovered: false });
  };

  return (
    <AsideContext.Provider
      value={{
        collapsed: collapse.clicked && !collapse.hovered,
        clicked: collapse.clicked,
        hovered: collapse.hovered,
        onToggle: handleToggle,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export default AsideContext;
