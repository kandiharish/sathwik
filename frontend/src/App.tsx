
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';

import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Stories } from './pages/Stories';
import { Gallery } from './pages/Gallery';
import { Projects } from './pages/Projects';

// Placeholder components for routing
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <h1 className="text-3xl font-serif font-bold text-primary">{title} Page - Coming Soon</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:slug" element={<Placeholder title="Program Detail" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="stories" element={<Stories />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />
          <Route path="donate" element={<Placeholder title="Donate" />} />
          <Route path="volunteer" element={<Placeholder title="Volunteer" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
