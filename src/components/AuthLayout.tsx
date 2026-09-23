import { Outlet } from 'react-router-dom';
import { VisualBrandingPanel } from './VisualBrandingPanel';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex w-full font-sans bg-white">
      {/* LEFT: Branding panel */}
      <div className="hidden lg:block lg:w-1/2 h-screen sticky top-0">
        <VisualBrandingPanel />
      </div>

      {/* RIGHT: Form area */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};