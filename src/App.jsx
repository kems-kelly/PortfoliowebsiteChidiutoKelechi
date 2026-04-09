import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <div className="app-container">
      <Navbar />
      
      {/* Home Page stays rendered in background */}
      <HomePage />

      {/* Project Detail Overlay */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
