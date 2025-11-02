'use client';
import { useEffect, useState } from 'react';
import LetterGlitch from '../reactbits/LetterGlitch';

const LoadingScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 10000); // 2.5s loading duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <LetterGlitch />
    </div>
  );
};

export default LoadingScreen;
