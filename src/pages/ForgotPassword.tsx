import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/ui/Button';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <Link to="/login" className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1">
        &lt; Back to sign in
      </Link>

      <div>
        <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">
          PASSWORD RECOVERY
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Forgot your password?</h2>
        <p className="text-slate-500">
          Enter your work email and we'll send you a link to reset it.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Work email</label>
          <TextField
            fullWidth
            placeholder="you@acmecorp.com"
            defaultValue="you@acmecorp.com"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                '& fieldset': { borderColor: '#E2E8F0' },
              },
            }}
          />
        </div>
        <PrimaryButton className="mt-2" onClick={() => navigate('/check-email')}>
          Send reset link
        </PrimaryButton>
      </div>

      <div className="text-center text-sm text-slate-500 mt-4 border-t border-slate-100 pt-6">
        Remembered your password?{' '}
        <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};