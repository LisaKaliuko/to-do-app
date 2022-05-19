import React from 'react';
import { GlobalStyles } from '@mui/material';
import { globalStyles, palette } from '@theme/index';
import ScaledDiagram from '@common/ScaledDiagram/index';
import PrimaryButton from '@common/Buttons/Buttons';
import { scaleDiagram, pieDiagram, donutDiagram } from '@constants/Diagrams';
import {
  Container,
  ImageContainer,
  Header,
  LogoContainer,
  Icon,
  LogoText,
  Link,
  Content,
  TitleBlock,
  Title,
  Text,
  BackgroundContainer,
  DiagramsContainer,
  ScaleDiagramContainer,
  DiagramTitle,
  DiagramText,
  PieChartBox,
  SecurityContainer,
  SecurityIcon,
  SecurityTitle,
  SecurityText,
} from './styled';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <Container>
        <Header>
          <LogoContainer>
            <Icon />
            <LogoText>ToDo Your Life</LogoText>
          </LogoContainer>
          <div>
            <Link>About us</Link>
            <Link>Blog</Link>
            <Link>Opportunities</Link>
          </div>
          <div>
            <Link>Log In</Link>
            <PrimaryButton size="medium">Sign Up</PrimaryButton>
          </div>
        </Header>

        <Content>
          <ImageContainer>
            <TitleBlock>
              <Title>Errare humanum est, stultum est in errore perseverare est stultum</Title>
              <Text>
                Errare humanum est, stultum est in errore perseverare stultum est in errore
                perseverare
              </Text>
              <PrimaryButton size="large">Sign Up Free</PrimaryButton>
            </TitleBlock>
          </ImageContainer>
          <BackgroundContainer color={palette.$backgroundMain}>
            <DiagramsContainer>
              <ScaleDiagramContainer>
                <DiagramTitle>Pie Diagram</DiagramTitle>
                <DiagramText>Eiusmod esse do consequat ad dolor magna reprehenderit.</DiagramText>
                <PieChartBox
                  data={pieDiagram}
                  label={({ dataEntry }) => dataEntry.title}
                  labelStyle={{ fontSize: '6px' }}
                  labelPosition={60}
                  radius={40}
                />
              </ScaleDiagramContainer>
              <ScaleDiagramContainer>
                <DiagramTitle>Scale Diagram</DiagramTitle>
                <DiagramText>Eiusmod esse do consequat ad dolor magna reprehenderit.</DiagramText>
                {scaleDiagram.map(({ color, value, name }) => (
                  <ScaledDiagram scaleColor={color} value={value} name={name} />
                ))}
              </ScaleDiagramContainer>
              <ScaleDiagramContainer>
                <DiagramTitle>Donut Diagram</DiagramTitle>
                <DiagramText>Eiusmod esse do consequat ad dolor magna reprehenderit.</DiagramText>
                <PieChartBox
                  data={donutDiagram}
                  lineWidth={40}
                  label={({ dataEntry }) => dataEntry.value}
                  paddingAngle={2}
                  labelStyle={{ fontSize: '5px' }}
                  labelPosition={80}
                  radius={40}
                />
              </ScaleDiagramContainer>
            </DiagramsContainer>
          </BackgroundContainer>
          <BackgroundContainer color={palette.$backgroundSecondary}>
            <SecurityContainer>
              <SecurityIcon />
              <SecurityTitle>
                Voluptate aliquip cillum sit ex nostrud aliqua officia culpa labore.
              </SecurityTitle>
              <SecurityText>
                Consequat officia veniam ullamco occaecat anim cillum dolor aute officia ea.
                Reprehenderit dolor fugiat irure eiusmod in. Est quis fugiat ex ipsum exercitation
                duis culpa cupidatat. Consequat officia veniam ullamco occaecat anim cillum dolor
                aute officia ea. Reprehenderit dolor fugiat irure eiusmod in. Est quis fugiat ex
                ipsum exercitation duis culpa cupidatat.
              </SecurityText>
            </SecurityContainer>
          </BackgroundContainer>
        </Content>
      </Container>
    </>
  );
};

export default App;
