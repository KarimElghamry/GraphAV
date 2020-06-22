import Theme from '../models/Theme';

const dark: Theme = {
  name: 'dark',
  navbar: {
    background: '#02E095',
    foreground: 'white',
  },
  sidebar: {
    background: 'white',
    foreground: '#0D1929',
  },
  canvas: {
    background: '#0D1929',
  },
  nodeActive: {
    background: '#02E095',
    foreground: 'white',
  },
  nodeInactive: {
    background: 'transparent',
    foreground: 'white',
  },
  edge: {
    background: 'white',
  },
  slider: {
    background: '#0D1929',
    foreground: 'white',
  },
};

export default dark;
