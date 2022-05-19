import styled from '@emotion/styled';
import { palette } from './theme';
import mainImg from './images/mainImg.jpg';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { PieChart } from 'react-minimal-pie-chart';
import GppGoodIcon from '@mui/icons-material/GppGood';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const Header = styled('div')({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Icon = styled(AccessTimeFilledIcon)({
  fontSize: '50px',
  color: `${palette.$blackMain}`,
  marginRight: '10px',
});

export const LogoText = styled('span')({
  fontSize: '25px',
});

export const Link = styled('span')({
  margin: '15px',
  fontSize: '18px',
});

export const Content = styled('div')({
  flexGrow: 1,
  margin: 'auto',
});

export const ImageContainer = styled('div')({
  display: 'block',
  backgroundImage: `url(${mainImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '120px 70px 190px 70px',
});

export const TitleBlock = styled('div')({
  width: '55%',
  margin: 'auto',
  padding: '50px 30px',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px',
});

export const Title = styled('p')({
  fontSize: '40px',
  fontWeight: '600',
  margin: '0px 10px 20px 10px',
});

export const Text = styled('p')({
  fontSize: '20px',
  marginBottom: '40px',
});

interface Props {
  color: string;
}

export const BackgroundContainer = styled('div')((props: Props) => ({
  backgroundColor: props.color,
}));

export const DiagramsContainer = styled('div')({
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const ScaleDiagramContainer = styled('div')({
  padding: '20px',
});

export const DiagramTitle = styled('p')({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '25px',
  marginBottom: '7px',
});

export const DiagramText = styled('p')({
  textAlign: 'center',
  margin: '0px 0px 7px 0px',
});

export const PieChartBox = styled(PieChart)({
  maxHeight: '300px',
});

export const SecurityContainer = styled('div')({
  width: '50%',
  padding: '70px 0px',
  margin: 'auto',
});

export const SecurityIcon = styled(GppGoodIcon)({
  fontSize: '80px',
  display: 'block',
  margin: 'auto',
});

export const SecurityTitle = styled('p')({
  fontSize: '30px',
  fontWeight: 600,
  textAlign: 'center',
});

export const SecurityText = styled('p')({
  fontSize: '18px',
  textAlign: 'center',
});
