// import { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query';
// import { PrimaryButton } from '../components/ui/Button';

// interface VerifyOtpPayload {
//   otp: string;
// }

// interface VerifyOtpResponse {
//   token: string;
//   user: { id: string; name: string; email: string };  
// }

// const verifyOtpRequest = async (payload: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (payload.otp === '123456') {
//         resolve({
//           token: 'mock-jwt-token-123',
//           user: { id: 'u1', name: 'John Doe', email: 'john@example.com' },
//         });
//       } else {
//         reject(new Error('Invalid OTP code. Try "123456" for testing.'));
//       }
//     }, 1200);
//   });
// };

// export const useVerifyOtp = () => {
//   return useMutation({
//     mutationFn: verifyOtpRequest,
//   });
// };

// export const TwoFactor = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [error, setError] = useState<string | null>(null);
//   const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
//   const navigate = useNavigate();
//   const { mutate, isPending } = useVerifyOtp();

//   const handleChange = (index: number, value: string) => {
//     const nextValue = value.replace(/\D/g, '').slice(-1);
//     const nextOtp = [...otp];
//     nextOtp[index] = nextValue;
//     setOtp(nextOtp);
//     setError(null);

//     if (nextValue && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmit = () => {
//     const code = otp.join('');

//     if (code.length !== 6) {
//       setError('Enter the 6-digit code from your authenticator app.');
//       return;
//     }

//     mutate(
//       { otp: code },
//       {
//         onSuccess: () => navigate('/success'),
//         onError: (submissionError) => setError(submissionError.message),
//       }
//     );
//   };

//   return (
//     <div className="flex flex-col gap-6">
//       <Link
//         to="/login"
//         className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1"
//       >
//         &lt; Back
//       </Link>

//       <div>
//         <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">
//           STEP 3 OF 3 · VERIFY
//         </p>
//         <h2 className="text-3xl font-bold text-slate-900 mb-2">Two-factor verification</h2>
//         <p className="text-slate-500">Enter the 6-digit code from your authenticator app.</p>
//       </div>

//       <div className="flex gap-2 justify-between my-4">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             ref={(element) => {
//               inputRefs.current[index] = element;
//             }}
//             type="text"
//             inputMode="numeric"
//             value={digit}
//             onChange={(event) => handleChange(index, event.target.value)}
//             onKeyDown={(event) => handleKeyDown(index, event)}
//             className="w-12 h-14 text-center text-xl font-semibold border border-slate-200 rounded-lg bg-slate-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
//             maxLength={1}
//             aria-label={`OTP digit ${index + 1}`}
//           />
//         ))}
//       </div>

//       {error && (
//         <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-red-700">
//           {error}
//         </div>
//       )}

//       <div className="text-center text-sm text-slate-500 mb-2">
//         Code expires in 04:57 ·{' '}
//         <button type="button" className="font-semibold text-indigo-600 hover:underline">
//           Resend code
//         </button>{' '}
//         ·{' '}
//         <button type="button" className="font-semibold text-indigo-600 hover:underline">
//           Use a backup code
//         </button>
//       </div>

//       <PrimaryButton onClick={handleSubmit} disabled={isPending}>
//         {isPending ? 'Verifying...' : 'Verify and sign in'}
//       </PrimaryButton>

//       <div className="text-center text-sm text-slate-500 mt-4 border-t border-slate-100 pt-6">
//         Having trouble?{' '}
//         <a href="#" className="font-semibold text-indigo-600 hover:underline">
//           Contact support
//         </a>
//       </div>
//     </div>
//   );
// };





import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { PrimaryButton } from '../components/ui/Button';

interface VerifyOtpPayload {
  otp: string;
}

interface VerifyOtpResponse {
  token: string;
  user: { id: string; name: string; email: string };
}

const verifyOtpRequest = async (payload: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payload.otp === '123456') {
        resolve({
          token: 'mock-jwt-token-123',
          user: { id: 'u1', name: 'John Doe', email: 'john@example.com' },
        });
      } else {
        reject(new Error('Invalid OTP code. Try "123456" for testing.'));
      }
    }, 1200);
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtpRequest,
  });
};

export const TwoFactor = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState<string | null>(null);
  
  // 1. ADD COUNTDOWN TIMER STATE (300 seconds = 5 minutes)
  const [timeLeft, setTimeLeft] = useState(300);
  
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();
  const { mutate, isPending } = useVerifyOtp();

  // 2. COUNTDOWN TIMER LOGIC
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds into MM:SS (e.g., 297 -> 04:57)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 3. RESEND CODE HANDLER
  const handleResendCode = () => {
    if (timeLeft > 0) return; // Prevent resend if timer hasn't expired

    // Reset timer back to 5 minutes
    setTimeLeft(300);
    setOtp(['', '', '', '', '', '']);
    setError(null);
    inputRefs.current[0]?.focus();
    
    // Optional: Call your resend OTP mutation/API here
  };

  const handleChange = (index: number, value: string) => {
    const nextValue = value.replace(/\D/g, '').slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = nextValue;
    setOtp(nextOtp);
    setError(null);

    if (nextValue && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');

    if (timeLeft === 0) {
      setError('OTP has expired. Please click "Resend code" to get a new one.');
      return;
    }

    if (code.length !== 6) {
      setError('Enter the 6-digit code from your authenticator app.');
      return;
    }

    mutate(
      { otp: code },
      {
        onSuccess: () => navigate('/success'),
        onError: (submissionError) => setError(submissionError.message),
      }
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <Link
        to="/login"
        className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1"
      >
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
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            className="w-12 h-14 text-center text-xl font-semibold border border-slate-200 rounded-lg bg-slate-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
            maxLength={1}
            disabled={timeLeft === 0 || isPending}
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* DYNAMIC TIMER & RESEND CODE BUTTON */}
      <div className="text-center text-sm text-slate-500 mb-2">
        {timeLeft > 0 ? (
          <>Code expires in <span className="font-semibold text-slate-700">{formatTime(timeLeft)}</span></>
        ) : (
          <span className="text-red-500 font-semibold">Code expired</span>
        )}{' '}
        ·{' '}
        <button
          type="button"
          onClick={handleResendCode}
          disabled={timeLeft > 0}
          className={`font-semibold ${
            timeLeft > 0
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-indigo-600 hover:underline'
          }`}
        >
          Resend code
        </button>{' '}
        ·{' '}
        <button type="button" className="font-semibold text-indigo-600 hover:underline">
          Use a backup code
        </button>
      </div>

      <PrimaryButton onClick={handleSubmit} disabled={isPending || timeLeft === 0}>
        {isPending ? 'Verifying...' : 'Verify and sign in'}
      </PrimaryButton>

      <div className="text-center text-sm text-slate-500 mt-4 border-t border-slate-100 pt-6">
        Having trouble?{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:underline">
          Contact support
        </a>
      </div>
    </div>
  );
};





// Replace the mock function with real backend integration
// const verifyOtpRequest = async (payload: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
//   const response = await fetch('/api/v1/auth/verify-otp', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || 'Invalid OTP code.');
//   }

//   return response.json();
// };