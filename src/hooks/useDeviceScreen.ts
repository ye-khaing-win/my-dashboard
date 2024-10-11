import { useCallback, useEffect, useState } from 'react';

type TDeviceScreen = {
  width: number | undefined;
  height: number | undefined;
  screenWidth: number | undefined;
  screenHeight: number | undefined;
  isPortrait: boolean | undefined;
  isLandscape: boolean | undefined;
};

const useDeviceScreen = () => {
  const isClient = typeof window === 'object';

  const getDeviceScreen = useCallback((): TDeviceScreen => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      screenWidth: isClient ? window.screen.width : undefined,
      screenHeight: isClient ? window.screen.height : undefined,
      isPortrait: isClient
        ? window.matchMedia('(orientation: portrait)').matches
        : undefined,
      isLandscape: isClient
        ? window.matchMedia('(orientation: landscape)').matches
        : undefined,
    };
  }, [isClient]);

  const [deviceScreen, setDeviceScreen] =
    useState<TDeviceScreen>(getDeviceScreen);

  useEffect(() => {
    const handleResize = () => {
      setDeviceScreen(getDeviceScreen());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getDeviceScreen]);

  return deviceScreen;
};

export default useDeviceScreen;
