import React, {ReactElement} from 'react';
import Container from './Container';
import Algorithms from '../../../models/Algorithms';

interface Props {
  selectedAlgorithm: Algorithms;
}

const descriptionText = new Map<Algorithms, string>([
  [
    Algorithms.dfs,
    'DFS prioritizes the depth while traversing and does not find the shortest path',
  ],
  [
    Algorithms.bfs,
    'BFS traverses the graph level by level and can find the shortest paths',
  ],
  [
    Algorithms.dijkstra,
    'Dijkstra guarantees to find the shortest path from the starting node to the others',
  ],
]);

const AlgorithmsDescription: React.FC<Props> = (props: Props): ReactElement => {
  return <Container>{descriptionText.get(props.selectedAlgorithm)}</Container>;
};

export default AlgorithmsDescription;
