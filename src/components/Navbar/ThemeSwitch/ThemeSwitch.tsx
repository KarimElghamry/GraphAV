import React, {ReactElement} from 'react';
import Track from './Track';
import Thumb from './Thumb';
import themes from '../../../themes';
import Theme from '../../../models/Theme';

interface ThemeSwitchProps {
  changeTheme: Function;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = (
  props: ThemeSwitchProps
): ReactElement => {
  const handleChangeTheme: () => void = () => {
    props.changeTheme((prev: Theme) =>
      prev.name === 'dark' ? themes.light : themes.dark
    );
  };

  return (
    <Track onClick={() => handleChangeTheme()}>
      <Thumb></Thumb>
    </Track>
  );
};

export default ThemeSwitch;
