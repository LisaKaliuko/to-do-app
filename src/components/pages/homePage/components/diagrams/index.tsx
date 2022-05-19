import React from 'react';
import { scaleDiagram, pieDiagram, donutDiagram } from '@constants/Diagrams';
import ScaledDiagram from '@common/ScaledDiagram';
import { Container, DiagramContainer, Title, Text, PieChartBox } from './styled';

const Diagrams: React.FC = (): JSX.Element => {
  return (
    <Container>
      <DiagramContainer>
        <Title>Pie Diagram</Title>
        <Text>Eiusmod esse do consequat ad dolor magna reprehenderit.</Text>
        <PieChartBox
          data={pieDiagram}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ fontSize: '6px' }}
          labelPosition={60}
          radius={40}
        />
      </DiagramContainer>
      <DiagramContainer>
        <Title>Scale Diagram</Title>
        <Text>Eiusmod esse do consequat ad dolor magna reprehenderit.</Text>
        {scaleDiagram.map(({ color, value, name }) => (
          <ScaledDiagram coloring={color} value={value} name={name} key={name} />
        ))}
      </DiagramContainer>
      <DiagramContainer>
        <Title>Donut Diagram</Title>
        <Text>Eiusmod esse do consequat ad dolor magna reprehenderit.</Text>
        <PieChartBox
          data={donutDiagram}
          lineWidth={40}
          label={({ dataEntry }) => dataEntry.value}
          paddingAngle={2}
          labelStyle={{ fontSize: '5px' }}
          labelPosition={80}
          radius={40}
        />
      </DiagramContainer>
    </Container>
  );
};

export default Diagrams;
