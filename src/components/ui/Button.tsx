import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrimaryButton = styled(MuiButton)({
  backgroundColor: '#0F172A',
  color: '#ffffff',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 24px',
  borderRadius: '8px',
  boxShadow: 'none',
  width: '100%',
  '&:hover': {
    backgroundColor: '#1E293B',
    boxShadow: 'none',
  },
});

export const SecondaryButton = styled(MuiButton)({
  backgroundColor: '#ffffff',
  color: '#0F172A',
  border: '1px solid #E2E8F0',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 24px',
  borderRadius: '8px',
  boxShadow: 'none',
  width: '100%',
  '&:hover': {
    backgroundColor: '#F8FAFC',
    borderColor: '#CBD5E1',
  },
});