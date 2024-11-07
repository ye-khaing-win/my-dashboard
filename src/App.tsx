import Wrapper from './components/layouts/Wrapper/Wrapper';
import useTheme from './hooks/useTheme';
import AsideRouter from './routers/AsideRouter';
import HeaderRouter from './routers/HeaderRouter';

const App = () => {
  const { fontSize } = useTheme();

  return (
    <>
      {/* <style>{`:root {font-size: ${fontSize}px}`}</style> */}
      <div data-component-name="App" className="flex grow flex-col">
        <AsideRouter />
        <Wrapper>
          <HeaderRouter />
        </Wrapper>
      </div>
    </>
  );
};

export default App;
