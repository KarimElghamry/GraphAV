import { Theme } from '../models/Theme';

const light: Theme = {
  name: 'light',
  navbar: {
    background: '#0D1929',
    foreground: 'white',
  },
  sidebar: {
    background: '#0D1929',
    foreground: 'white'
  },
  canvas: {
    background: '#EFEFEF',
    foreground: '',
  },
  nodeActive: {
    background: '#02E095',
    foreground: 'white',
  },
  nodeInactive: {
    background: '#0D1929',
    foreground: 'white',
  },
  edge: {
    background: '#0D1929',
  },
  slider: {
    background: '#02E095',
    foreground: '#0D1929',
  }
};

export default light;
