import React, {ReactElement} from 'react';
import Navbar from '../Navbar/Navbar';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import GraphNode from '../GraphNode/GraphNode';

interface HomeProps {
  changeTheme: Function;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  return (
    <div>
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas>
        <GraphNode isActive={true}></GraphNode>
      </GraphCanvas>
    </div>
  );
};

export default Home;
