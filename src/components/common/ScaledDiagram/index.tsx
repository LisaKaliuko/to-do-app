import React from 'react';
import { Props } from './types';
import { ScaledSlider, Text } from './styled';

const ScaledDiagram: React.FC<Props> = ({ coloring, value, name }): JSX.Element => {
  return (
    <>
      <ScaledSlider
        min={0}
        max={10}
        step={1}
        marks={true}
        value={value}
        valueLabelDisplay="off"
        coloring={coloring}
      />
      <Text>{name}</Text>
    </>
  );
};

export default ScaledDiagram;
