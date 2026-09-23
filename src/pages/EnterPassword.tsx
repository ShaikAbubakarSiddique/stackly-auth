import { useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/ui/Button';

export const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  const MAX_ATTEMPTS = 5;
  const DEMO_PASSWORD = 'password123';

  const handleSignIn = () => {
    const trimmed = password.trim();

    if (!trimmed) {
      setError('Password is required');
      return;
    }

    // ✅ Correct password → go to 2FA
    if (trimmed === DEMO_PASSWORD) {
      navigate('/2fa');
      return;
    }

    // ❌ Wrong password → increment attempts
    const next = attempts + 1;
    setAttempts(next);

    // Lock after 5 wrong attempts
    if (next >= MAX_ATTEMPTS) {
      navigate('/locked');
      return;
    }

    const remaining = MAX_ATTEMPTS - next;
    setError(
      `Incorrect password. You have ${remaining} attempt${
        remaining === 1 ? '' : 's'
      } remaining.`
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
          STEP 2 OF 3 · PASSWORD
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Enter your password
        </h2>
        <p className="text-slate-500">
          Signing in to <strong className="text-slate-800">acmecorp</strong>.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex gap-3 text-red-700 text-sm">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold">Incorrect password</p>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      )}

      {/* User switcher */}
      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
            AC
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">you@acmecorp.com</p>
            <p className="text-xs text-slate-500">
              Not you? Use a different account
            </p>
          </div>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:underline">
          Switch
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSignIn();
            }}
            error={!!error}
            variant="outlined"
            autoComplete="current-password"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                '& fieldset': { borderColor: error ? '#EF4444' : '#E2E8F0' },
              },
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-[-8px]">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: '#CBD5E1',
                  '&.Mui-checked': { color: '#0F172A' },
                }}
              />
            }
            label={
              <span className="text-sm text-slate-600">
                Remember this device for 30 days
              </span>
            }
          />
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <PrimaryButton onClick={handleSignIn} className="mt-4">
          Sign in
        </PrimaryButton>
      </div>

      <div className="text-center text-xs text-slate-400 mt-4 border-t border-slate-100 pt-6">
        Protected by enterprise password policy · {MAX_ATTEMPTS} attempts before lockout
      </div>
    </div>
  );
};