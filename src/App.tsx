import React, {ReactElement, useState} from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';
import themes from './themes';
import {Theme} from './models/Theme';

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.dark);

  return (
    <ThemeProvider theme={globalTheme}>
      <Home></Home>
    </ThemeProvider>
  );
};

export default App;
