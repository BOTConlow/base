import { styled } from '../../styles/stitches.config'

export const ButtonContainer = styled('button', {
  background: '#00A116',
  fontSize: '1.2rem',
  fontWeight: '700',
  color: '#fff',
  borderRadius: 25,
  border: 0,
  padding: '1.2rem 2.5rem',
  transition: 'all 300ms ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.6rem',

  '@media (max-width: 768px)': {
    fontSize: '1.1rem',
    padding: '1rem 1.5rem',
    width: '100%',
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },
})
