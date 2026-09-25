import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import { EnterPassword } from './pages/EnterPassword';
import { TwoFactor } from './pages/TwoFactor';
import { ForgotPassword } from './pages/ForgotPassword';
import { CheckEmail } from './pages/CheckEmail';
import { AccountLocked } from './pages/AccountLocked';
import { Success } from './pages/Success';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* All auth pages share the same layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<EnterPassword />} />
            <Route path="/2fa" element={<TwoFactor />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/locked" element={<AccountLocked />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;