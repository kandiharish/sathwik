
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#FAFAF8]">
      {/* Global subtle static background - Zero repaints, smooth 60fps */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 5% 5%, rgba(245, 158, 11, 0.03) 0%, transparent 45%), radial-gradient(circle at 95% 95%, rgba(5, 78, 56, 0.03) 0%, transparent 45%)'
        }}
      />

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
