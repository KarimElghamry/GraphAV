export interface Theme {
  name: string;
  navbar: Color;
  sidebar: Color;
  canvas: Color;
  nodeActive: Color;
  nodeInactive: Color;
  edge: Color;
}

interface Color {
  background: string;
  foreground?: string;
}
