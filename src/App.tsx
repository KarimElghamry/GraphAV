import React, {ReactElement, useState} from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';
import themes from './themes';
import Test from './components/Test/Test';

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<string>('dark');

  return (
    <ThemeProvider theme={globalTheme === 'dark' ? themes.dark : themes.light}>
      <Home></Home>
      <Test toggleTheme={setGlobalTheme}></Test>
    </ThemeProvider>
  );
};

export default App;
