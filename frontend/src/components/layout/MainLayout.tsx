
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#FAFAF8]">
      {/* Global subtle animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 mix-blend-multiply filter blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 mix-blend-multiply filter blur-[100px] animate-[pulse_15s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-orange-500/5 mix-blend-multiply filter blur-[120px] animate-[pulse_12s_ease-in-out_infinite]" />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
