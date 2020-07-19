import React, {ReactElement, useState} from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';
import themes from './themes';
import Theme from './models/Theme';
import Tutorial from './components/Tutorial/Tutorial';

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.dark);

  return (
    <ThemeProvider theme={globalTheme}>
      <Home changeTheme={setGlobalTheme}></Home>
      <Tutorial />
    </ThemeProvider>
  );
};

export default App;
