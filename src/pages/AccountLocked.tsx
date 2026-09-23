import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../components/ui/Button';

export const AccountLocked = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-2">
        <Lock size={32} />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">This account is locked</h2>
        <p className="text-slate-500 max-w-sm mx-auto">
          Too many failed sign-in attempts. For your security,{' '}
          <strong className="text-slate-800">you@acmecorp.com</strong> has been temporarily locked
          for 15 minutes.
        </p>
      </div>

      <div className="w-full bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3 text-amber-800 text-sm text-left mt-2">
        <span className="mt-0.5">⏱️</span>
        <div>
          <p className="font-semibold">Try again in 15:00</p>
          <p className="text-amber-700">
            Or reset your password now to regain access immediately.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 mt-2">
        <Link to="/forgot-password" className="w-full">
          <PrimaryButton>Reset password</PrimaryButton>
        </Link>
        <Link to="/login" className="w-full">
          <SecondaryButton>Back to sign in</SecondaryButton>
        </Link>
      </div>

      <div className="text-center text-sm text-slate-500 mt-4 border-t border-slate-100 pt-6 w-full">
        This lockout was recorded in the security audit log ·{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:underline">
          Contact support
        </a>
      </div>
    </div>
  );
};