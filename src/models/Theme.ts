interface Theme {
  name: string;
  navbar: Color;
  sidebar: Color;
  canvas: Color;
  nodeActive: Color;
  nodeInactive: Color;
  edge: Color;
  slider: Color;
}

interface Color {
  background: string;
  foreground?: string;
}

export default Theme;
