import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/ui/Button';

export const TwoFactor = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Link to="/login" className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1">
        &lt; Back
      </Link>

      <div>
        <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">
          STEP 3 OF 3 · VERIFY
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Two-factor verification</h2>
        <p className="text-slate-500">Enter the 6-digit code from your authenticator app.</p>
      </div>

      <div className="flex gap-2 justify-between my-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-14 text-center text-xl font-semibold border border-slate-200 rounded-lg bg-slate-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
            maxLength={1}
          />
        ))}
      </div>

      <div className="text-center text-sm text-slate-500 mb-2">
        Code expires in 04:57 ·{' '}
        <button className="font-semibold text-indigo-600 hover:underline">Resend code</button> ·{' '}
        <button className="font-semibold text-indigo-600 hover:underline">Use a backup code</button>
      </div>

      <PrimaryButton onClick={() => navigate('/success')}>Verify and sign in</PrimaryButton>

      <div className="text-center text-sm text-slate-500 mt-4 border-t border-slate-100 pt-6">
        Having trouble?{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:underline">
          Contact support
        </a>
      </div>
    </div>
  );
};