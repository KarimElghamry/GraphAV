import React, {ReactElement} from 'react';
import Navbar from '../Navbar/Navbar';

const Home: React.FC<{}> = (): ReactElement => {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
