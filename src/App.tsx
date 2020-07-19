import React, {ReactElement, useState} from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';
import themes from './themes';
import Theme from './models/Theme';
import Tutorial from './components/Tutorial/Tutorial';

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);
  const [isTutorialVisible, setIsTutorialVisible] = useState<boolean>(true);

  const onTutorialExit = () => {
    setIsTutorialVisible(false);
  };

  const onTutorialOpen = () => {
    setIsTutorialVisible(true);
  };
  return (
    <ThemeProvider theme={globalTheme}>
      <Home onHelpClick={onTutorialOpen} changeTheme={setGlobalTheme}></Home>
      <Tutorial onExit={onTutorialExit} isVisible={isTutorialVisible} />
    </ThemeProvider>
  );
};

export default App;
