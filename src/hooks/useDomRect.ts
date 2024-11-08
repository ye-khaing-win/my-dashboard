import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

const useDomRect = (ref: RefObject<HTMLElement>): [DOMRect | null] => {
  const [domRect, setDomRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    setDomRect(ref?.current && ref.current.getBoundingClientRect());
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      setDomRect(ref?.current && ref.current.getBoundingClientRect());
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [ref]);

  return [domRect];
};

export default useDomRect;
