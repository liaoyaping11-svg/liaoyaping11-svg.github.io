import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/common/LoadingScreen';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import WorksPage from './pages/Projects';

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
