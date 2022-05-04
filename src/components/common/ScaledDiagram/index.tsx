import React from 'react';
import { Props } from './types';
import { ScaledSlider, Text } from './styled';

const ScaledDiagram: React.FC<Props> = ({ scaleColor, value, name }): JSX.Element => {
  return (
    <>
      <ScaledSlider
        min={0}
        max={10}
        step={1}
        marks={true}
        value={value}
        valueLabelDisplay="off"
        scaleColor={scaleColor}
      />
      <Text>{name}</Text>
    </>
  );
};

export default ScaledDiagram;
