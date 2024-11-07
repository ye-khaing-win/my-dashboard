import useTheme from './hooks/useTheme';
import AsideRouter from './routers/AsideRouter';

const App = () => {
  const { fontSize } = useTheme();

  return (
    <>
      <style>{`:root {font-size: ${fontSize}px}`}</style>
      <div data-component-name="App" className="flex grow flex-col">
        <AsideRouter />
      </div>
    </>
  );
};

export default App;
