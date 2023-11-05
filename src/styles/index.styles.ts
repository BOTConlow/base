import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  margin: '3.5rem 0',

  '@media (max-width: 768px)': {
    padding: '0 5%',
    margin: '1.9rem 0',
  },
})
