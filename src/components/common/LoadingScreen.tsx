import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: Props) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(onComplete, 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loading-monogram">
        <div className="loading-ring" />
        <div className="loading-ring-2" />
        <span className="loading-text">LYP</span>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
};

export default LoadingScreen;
