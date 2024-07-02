import React, { useLayoutEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
