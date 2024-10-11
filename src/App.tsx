import AsideRouter from './routers/AsideRouter';

const App = () => {
  return (
    <>
      <style>{`:root {font-size: ${14}px}`}</style>
      <div data-component-name="App" className="flex grow flex-col">
        <AsideRouter />
      </div>
    </>
  );
};

export default App;
